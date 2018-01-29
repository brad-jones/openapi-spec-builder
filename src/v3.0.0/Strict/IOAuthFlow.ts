import ISpecificationExtension from './ISpecificationExtension';

/**
 * Configuration details for a supported OAuth Flow
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#oauth-flow-object
 */
export default interface IOAuthFlow extends ISpecificationExtension
{
    /**
     * The authorization URL to be used for this flow.
     *
     * This __MUST__ be in the form of a URL.
     *
     * __REQUIRED__
     */
    authorizationUrl: string;

    /**
     * The token URL to be used for this flow.
     *
     * This __MUST__ be in the form of a URL.
     *
     * __REQUIRED__
     */
    tokenUrl: string;

    /**
     * The URL to be used for obtaining refresh tokens.
     *
     * This __MUST__ be in the form of a URL.
     */
    refreshUrl?: string;

    /**
     * The available scopes for the OAuth2 security scheme.
     *
     * A map between the scope name and a short description for it.
     *
     * __REQUIRED__
     */
    scopes: { [key: string]: string };
}
