import { SecuritySchemeType, SecuritySchemeIn } from '../TypeDefs';
import IOAuthFlows from './IOAuthFlows';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Defines a security scheme that can be used by the operations.
 *
 * Supported schemes are HTTP authentication, an API key (either as a header or
 * as a query parameter), OAuth2's common flows (implicit, password, application
 * and access code) as defined in [RFC6749](https://tools.ietf.org/html/rfc6749),
 * and [OpenID Connect Discovery](https://tools.ietf.org/html/draft-ietf-oauth-discovery-06).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#securitySchemeObject
 */
export default interface ISecurityScheme extends ISpecificationExtension
{
    /**
     * The type of the security scheme.
     *
     * __REQUIRED__
     */
    type: SecuritySchemeType;

    /**
     * A short description for security scheme.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * __MAY__ be used for rich text representation.
     */
    description?: string;

    /**
     * The name of the header, query or cookie parameter to be used.
     *
     * __REQUIRED__ only when `type` is set to `apiKey`.
     */
    name?: string;

    /**
     * The location of the API key.
     *
     * __REQUIRED__ only when `type` is set to `apiKey`.
     */
    in?: SecuritySchemeIn;

    /**
     * The name of the HTTP Authorization scheme to be used in the Authorization
     * header as defined in [RFC7235](https://tools.ietf.org/html/rfc7235#section-5.1).
     *
     * __REQUIRED__ only when `type` is set to `http`.
     */
    scheme?: string;

    /**
     * A hint to the client to identify how the bearer token is formatted.
     *
     * Bearer tokens are usually generated by an authorization server,
     * so this information is primarily for documentation purposes.
     *
     * Applies only when `type` is set to `http`.
     */
    bearerFormat?: string;

    /**
     * An object containing configuration information for the flow types supported.
     *
     * __REQUIRED__ only when `type` is set to `oauth2`.
     */
    flow?: IOAuthFlows;

    /**
     * OpenId Connect URL to discover OAuth2 configuration values.
     *
     * This __MUST__ be in the form of a URL.
     *
     * __REQUIRED__ only when `type` is set to `openIdConnect`.
     */
    openIdConnectUrl?: string;
}
