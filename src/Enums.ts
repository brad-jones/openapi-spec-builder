/**
 * The transfer protocol of the API.
 *
 * Values MUST be from the list: "http", "https", "ws", "wss".
 * If the schemes is not included, the default scheme to be used
 * is the one used to access the Swagger definition itself.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
 */
export type Schemes =
    'http' |
    'https' |
    'ws' |
    'wss'
;

/**
 * Primitive data types in the Swagger Specification are based on the types
 * supported by the JSON-Schema Draft 4. Models are described using the Schema
 * Object which is a subset of JSON Schema Draft 4.
 *
 * An additional primitive data type "file" is used by the Parameter Object
 * and the Response Object to set the parameter type or the response as
 * being a file.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
 */
export type Type =
    'array' |
    'boolean' |
    'integer' |
    'number' |
    'null' |
    'object' |
    'string' |
    'file'
;

/**
 * Swagger uses several known formats to more finely define the data type
 * being used. However, the format property is an open string-valued property,
 * and can have any value to support documentation needs. Formats such as
 * "email", "uuid", etc., can be used even though they are not defined by
 * this specification.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
 */
export type FormatType =
    'int32' |
    'int64' |
    'float' |
    'double' |
    'byte' |
    'binary' |
    'date' |
    'date-time' |
    'password'
;
