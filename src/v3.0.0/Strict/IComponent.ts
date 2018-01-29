import ILink from './ILink';
import ISchema from './ISchema';
import IHeader from './IHeader';
import IExample from './IExample';
import IResponse from './IResponse';
import ICallback from './ICallback';
import IReference from './IReference';
import IParameter from './IParameter';
import IRequestBody from './IRequestBody';
import ISecurityScheme from './ISecurityScheme';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Holds a set of reusable objects for different aspects of the OAS.
 *
 * All objects defined within the components object will have no effect on the
 * API unless they are explicitly referenced from properties outside the
 * components object.
 *
 * > NOTE: All the fixed fields declared, are objects that __MUST__ use keys
 *         that match the regular expression: `^[a-zA-Z0-9\.\-_]+$`
 *
 * TODO: Implement this regex check in the builder at runtime.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#components-object
 */
export default interface IComponent extends ISpecificationExtension
{
    /**
     * An object to hold reusable Schema Objects.
     */
    schemas?: { [schema: string]: ISchema | IReference };

    /**
     * An object to hold reusable Response Objects.
     */
    responses?: { [response: string]: IResponse | IReference };

    /**
     * An object to hold reusable Parameter Objects.
     */
    parameters?: { [parameter: string]: IParameter | IReference };

    /**
     * An object to hold reusable Example Objects.
     */
    examples?: { [example: string]: IExample | IReference };

    /**
     * An object to hold reusable Request Body Objects.
     */
    requestBodies?: { [request: string]: IRequestBody | IReference };

    /**
     * An object to hold reusable Header Objects.
     */
    headers?: { [header: string]: IHeader | IReference };

    /**
     * An object to hold reusable Security Scheme Objects.
     */
    securitySchemes?: { [securityScheme: string]: ISecurityScheme | IReference };

    /**
     * An object to hold reusable Link Objects.
     */
    links?: { [link: string]: ILink | IReference };

    /**
     * An object to hold reusable Callback Objects.
     */
    callbacks?: { [callback: string]: ICallback | IReference };
}
