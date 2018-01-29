/**
 * There are four possible parameter locations specified by the in field:
 *
 *   - __path:__ Used together with Path Templating, where the parameter value
 *     is actually part of the operation's URL. This does not include the host
 *     or base path of the API. For example, in `/items/{itemId}`, the path
 *     parameter is `itemId`.
 *
 *   - __query:__ Parameters that are appended to the URL. For example,
 *     in `/items?id=###`, the query parameter is `id`.
 *
 *   - __header:__ Custom headers that are expected as part of the request.
 *    Note that [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states
 *    header names are case insensitive.
 *
 *   - __cookie:__ Used to pass a specific cookie value to the API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#parameter-locations
 */
export type ParameterLocation =
    'query' |
    'header' |
    'path' |
    'cookie';

/**
 * In order to support common ways of serializing simple parameters,
 * a set of style values are defined.
 *
 *   - __matrix:__ Path style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.7)
 *
 *   - __label:__ Label style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.5)
 *
 *   - __form:__  Form style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.8).
 *     This option replaces `collectionFormat` with a `csv` (when `explode` is false)
 *     or `multi` (when `explode` is true) value from OpenAPI 2.0.
 *
 *   - __simple:__ Simple style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.2).
 *     This option replaces `collectionFormat` with a `csv` value from OpenAPI 2.0.
 *
 *   - __spaceDelimited:__ Space separated array values.
 *     This option replaces `collectionFormat` equal to `ssv` from OpenAPI 2.0.
 *
 *   - __pipeDelimited:__ Pipe separated array values.
 *     This option replaces `collectionFormat` equal to `pipes` from OpenAPI 2.0.
 *
 *   - __deepObject:__ Provides a simple way of rendering nested objects using form parameters.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#style-values
 */
export type SerializationStyle =
    'matrix' |
    'label' |
    'form' |
    'simple' |
    'spaceDelimited' |
    'pipeDelimited' |
    'deepObject';

/**
 * Primitive data types in the OAS are based on the types supported by the
 * [JSON Schema Specification Wright Draft 00](https://tools.ietf.org/html/draft-wright-json-schema-00#section-4.2).
 *
 * Note that `integer` as a type is also supported and is defined as a
 * JSON number without a fraction or exponent part.
 *
 * `null` is not supported as a type (see [nullable](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schemaNullable) for an alternative solution).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#data-types
 */
export type DataType =
    'boolean' |
    'object' |
    'array' |
    'number' |
    'integer' |
    'string';

/**
 * OAS uses several known formats to define in fine detail the data type being used.
 *
 * However, to support documentation needs, the format property is an open
 * `string`-valued property, and can have any value. Formats such as
 * `"email", "uuid"`, and so on, __MAY__ be used even though undefined by
 * this specification.
 *
 * Types that are not accompanied by a format property follow the type
 * definition in the JSON Schema.
 *
 * Tools that do not recognize a specific `format` __MAY__ default back to the
 * `type` alone, as if the `format` is not specified.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#dataTypeFormat
 */
export type DataFormat =
    'date' |
    'date-time' |
    'email' |
    'hostname' |
    'ipv4' |
    'ipv6' |
    'uri' |
    'uriref' |
    'int32' |
    'int64' |
    'float' |
    'double' |
    'byte' |
    'binary' |
    'password';

/**
 * Security scheme types that can be used by the operations.
 *
 * Supported schemes are HTTP authentication, an API key (either as a header or
 * as a query parameter), OAuth2's common flows (implicit, password, application
 * and access code) as defined in [RFC6749](https://tools.ietf.org/html/rfc6749),
 * and [OpenID Connect Discovery](https://tools.ietf.org/html/draft-ietf-oauth-discovery-06).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#security-scheme-object
 */
export type SecuritySchemeType =
    'apiKey' |
    'http' |
    'oauth2' |
    'openIdConnect';

/**
 * Valid locations for `apiKey`'s.
 *
 * __REQUIRED__ only when the `SecuritySchemeType` is set to `apiKey`.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#security-scheme-object
 */
export type SecuritySchemeIn =
    'query' |
    'header' |
    'cookie';
