import IOAuthFlow from './IOAuthFlow';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#oauth-flows-object
 */
export default interface IOAuthFlows extends ISpecificationExtension
{
    /**
     * Configuration for the OAuth Implicit flow
     */
    implicit?: IOAuthFlow;

    /**
     * Configuration for the OAuth Resource Owner Password flow
     */
    password?: IOAuthFlow;

    /**
     * Configuration for the OAuth Client Credentials flow.
     *
     * Previously called `application` in OpenAPI 2.0.
     */
    clientCredentials?: IOAuthFlow;

    /**
     * Configuration for the OAuth Authorization Code flow.
     *
     * Previously called `accessCode` in OpenAPI 2.0.
     */
    authorizationCode?: IOAuthFlow;
}
