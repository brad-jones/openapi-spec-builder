import * as deepEqual from 'deep-equal';
import * as swagger from 'swagger-tools';

import IParameter from './v2/Strict/IParameter';
import IReference from './v2/Strict/IReference';
import IResponses from './v2/Strict/IResponses';
import ISchema from './v2/Strict/ISchema';
import Modifiedv2ISpec from './v2/Modified/ISpec';
import Strictv2ISpec from './v2/Strict/ISpec';

import traverse = require('traverse');
import md5 = require('md5');

export default class OpenApiSpecBuilder
{
    /**
     * After the spec builder has worked it's magic,
     * this property will contain a strict open api specfication.
     */
    protected strictSpec: Strictv2ISpec;

    /**
     * Give us a typescript friendly version of the OpenAPI Spec
     * and we will convert it into a Strict version 2.0 Spec Document.
     */
    public constructor(protected modifiedSpec: Modifiedv2ISpec) {}

    /**
     * Perform the converstion between a Modified Spec & a Strict Spec.
     */
    public async getStrictSpec(): Promise<Strictv2ISpec>
    {
        return new Promise<Strictv2ISpec>((resolve, reject) =>
        {
            // Resolve straight away if we have already done the converstion.
            if (this.strictSpec != null) return resolve(this.strictSpec);

            // Run our converstion methods over the modified spec.
            this.addSwaggerVersion();
            this.convertModifiedEndpointsToStrictPaths();
            this.convertModifiedResponsesToStrictResponses();
            //this.deDuplicateAndMinify();

            // While the typescript interfaces go along way to helping provide
            // a valid open api specification, there are certian rules & edge
            // cases that can only be validated at RunTime.
            (<any>swagger.specs.v2).validate(this.modifiedSpec, (error, result) =>
            {
                if (error) return reject(error);

                if (typeof result !== 'undefined') return reject(result);

                this.strictSpec = <any>this.modifiedSpec;

                resolve(this.strictSpec);
            });
        });
    }

    /**
     * Converts the strict spec to a JSON String,
     * ready to be consumed by swagger-ui or other tools.
     */
    public async toJson(): Promise<string>
    {
        return JSON.stringify(await this.getStrictSpec());
    }

    /**
     * Our modfied spec does not define the swagger version,
     * it's static anyway so we automatially add it in.
     */
    protected addSwaggerVersion()
    {
        // Here we create a new object where the swagger key is first.
        // It's purely a visual thing to make the final JSON output look familar.
        let spec = this.modifiedSpec;
        this.modifiedSpec = <any>{swagger:'2.0'};
        for (let key in spec) this.modifiedSpec[key] = spec[key];
    }

    protected convertModifiedEndpointsToStrictPaths()
    {
        let endpoints = this.modifiedSpec.endpoints;
        delete this.modifiedSpec.endpoints;
        this.modifiedSpec['paths'] = {};

        for (let endpoint of endpoints)
        {
            if (this.modifiedSpec['paths'][endpoint.path] == null)
            {
                this.modifiedSpec['paths'][endpoint.path] = {};
            }

            let newOperation = Object.assign({}, endpoint);
            delete newOperation.path; delete newOperation.method;

            this.modifiedSpec['paths'][endpoint.path][endpoint.method] = newOperation;
        }
    }

    /**
     * Replace our modfied responses array with a strict responses object.
     */
    protected convertModifiedResponsesToStrictResponses()
    {
        for (let path in this.modifiedSpec['paths'])
        {
           for (let method in this.modifiedSpec['paths'][path])
           {
               // Grab the operation, ie: GET, POST, PUT, etc...
               let operation = this.modifiedSpec['paths'][path][method];

               // Create a new object to hold our responses,
               // where the keys are HTTP status codes.
               let responses: IResponses = {};
               operation.responses.forEach(response =>
               {
                   // NOTE: Status Codes of 0 get converted to a "default" response.
                   let key: any = response.statusCode === 0 ? 'default' : response.statusCode;

                   // Remove the status code from our modified response
                   // object to turn it into a strict response object.
                   let newResponse = Object.assign({}, response);
                   delete newResponse.statusCode;

                   // And add the response to our new list
                   responses[key] = newResponse;
               });

               // Overwrite the responses array with a responses object.
               operation.responses = <any>responses;
           }
        }
    }

    /*
    protected deDuplicateAndMinify()
    {
        let allSchemas = this.findAllSchemas();
        console.log(allSchemas);
        let allParameters = this.findAllParameters();
        console.log(allParameters);

        // Now look for any duplicates in our list.
        let duplicatedSchemas = this.findDuplicatesOfType<ISchema>(allSchemas);
        let duplicatedParameters = this.findDuplicatesOfType<IParameter>(allParameters);

        this.modifiedSpec['parameters'] = {};
        for (let parameterName in duplicatedParameters)
        {
            for (let keyPath of duplicatedParameters[parameterName].keyPaths)
            {
                spec.set(keyPath, {$ref:'#/parameters/'+parameterName});
            }

            this.modifiedSpec['parameters'][parameterName] = duplicatedParameters[parameterName].parameter;
        }
    }

    protected findAllParameters(): { keyPath: string[], value: IParameter }[]
    {
        let parameters: { keyPath: string[], value: IParameter }[] = [];

        traverse(this.modifiedSpec).forEach(function(node)
        {
            if (this.notRoot && this.parent.key === 'parameters')
            {
                parameters.push({keyPath: this.path, value: node});
            }
        });

        return parameters;
    }

    protected findAllSchemas(): { keyPath: string[], value: ISchema }[]
    {
        let schemas: { keyPath: string[], value: ISchema }[] = [];

        traverse(this.modifiedSpec).forEach(function(node)
        {
            if (this.notRoot && (this.key === 'schema' || this.key === 'items'))
            {
                if (this.path.indexOf('parameters') == -1 && this.path.indexOf('headers') == -1)
                {
                    schemas.push({keyPath: this.path, value: node});
                }
            }
        });

        return schemas;
    }

    protected findDuplicatesOfType<T>(values: { keyPath: string[], value: T }[]): { [name: string]: { keyPaths: string[][], value: T } }
    {
        let duplicates: { [name: string]: { keyPaths: string[][], value: T } } = {};

        for (let value1 of values)
        {
            for (let value2 of values)
            {
                // Ignore the case where both values are from the same place.
                if (deepEqual(value1.keyPath, value2.keyPath))
                {
                    continue;
                }

                // Check to see if we have 2 values that describe the same thing.
                if (deepEqual(value1.value, value2.value))
                {
                    let key: string = null;
                    if (value1.value['name'] != null)
                    {
                        // Parameters have name properties.
                        key = value1.value['name'];
                    }
                    else if (value1.value['title'] != null)
                    {
                        // Schema's have title properties but they are optional.
                        key = value1.value['title'];
                    }
                    else
                    {
                        // As a last restore we make hash of the value.
                        key = md5(JSON.stringify(value1.value));
                    }

                    if (duplicates[key] == null)
                    {
                        // The duplicated value does not already exist so lets add it.
                        duplicates[key] =
                        {
                            keyPaths: [value1.keyPath, value2.keyPath],
                            value: value1.value
                        };
                    }
                    else
                    {
                        // The duplicated value already exists in our list
                        // so all we need to do is append to it's array of keyPaths.
                        let keyPaths = duplicates[key].keyPaths;

                        if (keyPaths.find(v => deepEqual(v, value1.keyPath)) == null)
                        {
                            keyPaths.push(value1.keyPath);
                        }

                        if (keyPaths.find(v => deepEqual(v, value2.keyPath)) == null)
                        {
                            keyPaths.push(value2.keyPath);
                        }
                    }
                }
            }
        }

        return duplicates;
    }
    */
}
