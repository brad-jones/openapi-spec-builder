import IResponse from './IResponse';
import IReference from './IReference';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * A container for the expected responses of an operation.
 * The container maps a HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP
 * response codes because they may not be known in advance. However,
 * documentation is expected to cover a successful operation response
 * and any known errors.
 *
 * The default MAY be used as a default response object for all HTTP codes
 * that are not covered individually by the specification.
 *
 * The Responses Object __MUST__ contain at least one response code,
 * and it __SHOULD__ be the response for a successful operation call.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#responses-object
 */
export default interface IResponses extends ISpecificationExtension
{
    /**
     * The documentation of responses other than the ones declared
     * for specific HTTP response codes.
     *
     * Use this field to cover undeclared responses.
     *
     * A Reference Object can link to a response that the OpenAPI Object's
     * components/responses section defines.
     */
    default?: IResponse | IReference;

    /**
     * Any HTTP status code can be used as the property name,
     * but only one property per code, to describe the expected
     * response for that HTTP status code.
     *
     * A Reference Object can link to a response that is defined in the
     * OpenAPI Object's components/responses section.
     *
     * This field __MUST__ be enclosed in quotation marks (for example, "200")
     * for compatibility between JSON and YAML.
     *
     * To define a range of response codes, this field MAY contain the
     * uppercase wildcard character X. For example, 2XX represents all
     * response codes between [200-299].
     *
     * The following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX.
     *
     * If a response range is defined using an explicit code, the explicit code
     * definition takes precedence over the range definition for that code.
     */
    [statusCode: string]: IResponse | IReference;
}
