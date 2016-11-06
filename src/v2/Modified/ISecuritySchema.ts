/**
 * Allows the definition of a security scheme that can be used by the operations.
 *
 * Supported schemes are basic authentication, an API key (either as a header
 * or as a query parameter) and OAuth2's common flows (implicit, password,
 * application and access code).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-scheme-object
 */
interface ISecuritySchema
{
    /**
     * Required. The type of the security scheme.
     * Valid values are "basic", "apiKey" or "oauth2".
     */
    type: 'base' | 'apiKey' | 'oauth2';

    /**
     * A short description for security scheme.
     */
    description?: string;

    /**
     * The name of the header or query parameter to be used.
     *
     * > NOTE: Required when type is set to "apiKey".
     */
    name?: string;

    /**
     * The location of the API key.
     *
     * Valid values are "query" or "header".
     *
     * > NOTE: Required when type is set to "apiKey".
     */
    in?: 'query' | 'header';

    /**
     * The flow used by the OAuth2 security scheme.
     *
     * Valid values are "implicit", "password", "application" or "accessCode".
     *
     * > NOTE: Required when type is set to "oauth2".
     */
    flow?: 'implicit' | 'password' | 'application' | 'accessCode';

    /**
     * The authorization URL to be used for this flow.
     *
     * This SHOULD be in the form of a URL.
     *
     * > NOTE: Required when type is set to "oauth2" and the flow
     *         is set to implicit" or "accessCode".
     */
    authorizationUrl?: string;

    /**
     * The token URL to be used for this flow.
     *
     * This SHOULD be in the form of a URL.
     *
     * > NOTE: Required when type is set to "oauth2" and the flow
     *         is set to "password", "application" or "accessCode".
     */
    tokenUrl?: string;

    /**
     * The available scopes for the OAuth2 security scheme.
     *
     * > NOTE: Required when type is set to "oauth2".
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#scopes-object
     */
    scopes?: { [name: string]: string };
}

export default ISecuritySchema;
