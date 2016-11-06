#!/usr/bin/env ts-node

import IParaemter from '../src/v2/Modified/IParameter';
import IResponse from '../src/v2/Modified/IResponse';
import ISchema from '../src/v2/Modified/ISchema';
import OpenApiSpecBuilder from '../src/OpenApiSpecBuilder';

let pet: ISchema =
{
    type: 'object',
    required: ['id', 'name'],
    properties:
    {
        id:
        {
            type: 'integer',
            format: 'int64'
        },
        name:
        {
            type: 'string'
        },
        tag:
        {
            type: 'string'
        }
    }
};

let pets: ISchema =
{
    type: 'array',
    items: pet
};

let defaultResponse: IResponse =
{
    statusCode: 0,
    description: 'unexpected error',
    schema:
    {
        type: 'object',
        required: ['code', 'message'],
        properties:
        {
            code:
            {
                type: 'integer',
                format: 'int32'
            },
            message:
            {
                type: 'string'
            }
        }
    }
};

let parameter: IParaemter =
{
    name: 'limit',
    in: 'query',
    description: 'How many items to return at one time (max 100)',
    required: false,
    type: 'integer',
    format: 'int32'
};

let petstore = new OpenApiSpecBuilder
({
    info:
    {
        version: '1.0.0',
        title: 'Swagger Petstore',
        license:
        {
            name: 'MIT'
        }
    },
    host: 'petstore.swagger.io',
    basePath: '/v1',
    schemes: ['https'],
    consumes:[ 'application/json' ],
    produces:[ 'application/json' ],
    paths:
    {
        '/pets':
        {
            get:
            {
                summary: 'List all pets',
                operationId: 'listPets',
                tags: ['pets'],
                parameters:[ parameter ],
                responses:
                [
                    defaultResponse,
                    {
                        statusCode: 200,
                        description: 'An paged array of pets',
                        headers:
                        {
                            'x-next':
                            {
                                type: 'string',
                                description: 'A link to the next page of responses'
                            }
                        },
                        schema: pets
                    }
                ]
            },
            post:
            {
                summary: 'Create a pet',
                operationId: 'createPets',
                tags: ['pets'],
                parameters:[ parameter ],
                responses:
                [
                    defaultResponse,
                    {
                        statusCode: 201,
                        description: 'Null response'
                    }
                ]
            }
        },
        '/pets/{petId}':
        {
            get:
            {
                summary: 'Info for a specific pet',
                operationId: 'showPetById',
                tags: ['pets'],
                parameters:
                [parameter, {
                    name: 'petId',
                    in: 'path',
                    required: true,
                    description: 'The id of the pet to retrieve',
                    type: 'string'
                }],
                responses:
                [
                    defaultResponse,
                    {
                        statusCode: 200,
                        description: 'Expected response to a valid request',
                        schema: pets
                    }
                ]
            }
        }
    }
});

console.log(petstore.toJson());
