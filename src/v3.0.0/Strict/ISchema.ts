import { Type, Format } from '../TypeDefs';
import IXml from './IXml';
import IReference from './IReference';
import IExternalDocs from './IExternalDocs';
import IDiscriminator from './IDiscriminator';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * The Schema Object allows the definition of input and output data types.
 *
 * These types can be objects, but also primitives and arrays. This object is
 * an extended subset of the JSON Schema Specification Wright Draft 00.
 *
 * For more information about the properties, see [JSON Schema Core](https://tools.ietf.org/html/draft-wright-json-schema-00)
 * and [JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00).
 * Unless stated otherwise, the property definitions follow the JSON Schema.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schema-object
 */
export default interface ISchema extends ISpecificationExtension
{
    /**
     * The value of this keyword __MUST__ be a string.
     *
     * It can be used to decorate a user interface with information about the
     * data produced by this user interface. A title will preferably be short.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-6.1
     */
    title?: string;

    /**
     * The value of this keyword __MUST__ be a string.
     *
     * It can be used to decorate a user interface with information about the
     * data produced by this user interface.  A description will provide
     * explanation about the purpose of the instance described by this schema.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * __MAY__ be used for rich text representation.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-6.1
     */
    description?: string;

    /**
     * The value of this keyword __MUST__ be a number, strictly greater than `0`.
     *
     * A numeric instance is valid only if division
     * by this keyword's value results in an integer.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.1
     */
    multipleOf?: number;

    /**
     * The value of this keyword __MUST__ be a number,
     * representing an upper limit for a numeric instance.
     *
     * If the instance is a number, then this keyword validates if
     * `exclusiveMaximum` is true and instance is less than the provided
     * value, or else if the instance is less than or exactly equal to the
     * provided value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.2
     */
    maximum?: number;

    /**
     * The value of this keyword __MUST__ be a boolean, representing whether
     * the limit in `maximum` is exclusive or not. An undefined value is the
     * same as `false`.
     *
     * If this keyword is `true`, then a numeric instance __SHOULD NOT__ be
     * equal to the value specified in `maximum`. If this keyword is `false`
     * (or not specified), then a numeric instance __MAY__ be equal to the
     * value of `maximum`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.3
     */
    exclusiveMaximum?: number;

    /**
     * The value of this keyword __MUST__ be a number,
     * representing a lower limit for a numeric instance.
     *
     * If the instance is a number, then this keyword validates if
     * `exclusiveMinimum` is `true` and instance is greater than the
     * provided value, or else if the instance is greater than or
     * exactly equal to the provided value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.4
     */
    minimum?: number;

    /**
     * The value of this keyword __MUST__ be a boolean, representing
     * whether the limit in `minimum` is exclusive or not. An undefined
     * value is the same as `false`.
     *
     * If this keyword is `true`, then a numeric instance __SHOULD NOT__ be
     * equal to the value specified in `minimum`. If this keyword is `false`
     * (or not specified), then a numeric instance MAY be equal to the value
     * of `minimum`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.5
     */
    exclusiveMinimum?: number;

    /**
     * The value of this keyword __MUST__ be a non-negative integer.
     * The value of this keyword __MUST__ be an integer.
     * This integer __MUST__ be greater than, or equal to, `0`.
     *
     * A string instance is valid against this keyword if its length is less
     * than, or equal to, the value of this keyword.
     *
     * The length of a string instance is defined as the number of its
     * characters as defined by [RFC 7159](https://tools.ietf.org/html/rfc7159).
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.6
     */
    maxLength?: number;

    /**
     * A string instance is valid against this keyword if its length is
     * greater than, or equal to, the value of this keyword.
     *
     * The length of a string instance is defined as the number of its
     * characters as defined by [RFC 7159](https://tools.ietf.org/html/rfc7159).
     *
     * The value of this keyword __MUST__ be an integer.
     * This integer __MUST__ be greater than, or equal to, 0.
     *
     * This keyword, if absent, may be considered as being present with
     * integer value `0`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.7
     */
    minLength?: number;

    /**
     * The value of this keyword __MUST__ be a string.  This string __SHOULD__
     * be a valid regular expression, according to the [ECMA 262 regular
     * expression dialect](https://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5).
     *
     * A string instance is considered valid if the regular expression
     * matches the instance successfully.  Recall: regular expressions are
     * not implicitly anchored.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.8
     */
    pattern?: string;

    /**
     * The value of this keyword __MUST__ be an integer.
     * This integer __MUST__ be greater than, or equal to, 0.
     *
     * An array instance is valid against `maxItems` if its size is less
     * than, or equal to, the value of this keyword.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.10
     */
    maxItems?: number;

    /**
     * The value of this keyword __MUST__ be an integer.
     * This integer __MUST__ be greater than, or equal to, 0.
     *
     * An array instance is valid against `minItems` if its size is greater
     * than, or equal to, the value of this keyword.
     *
     * If this keyword is not present, it may be considered present with a
     * value of `0`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.11
     */
    minItems?: number;

    /**
     * The value of this keyword __MUST__ be a boolean.
     *
     * If this keyword has boolean value `false`, the instance validates
     * successfully. If it has boolean value `true`, the instance validates
     * successfully if all of its elements are unique.
     *
     * If not present, this keyword may be considered present with boolean
     * value `false`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.12
     */
    uniqueItems?: boolean;

    /**
     * The value of this keyword __MUST__ be an integer.
     * This integer __MUST__ be greater than, or equal to, `0`.
     *
     * An object instance is valid against `maxProperties"` if its number of
     * properties is less than, or equal to, the value of this keyword.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.13
     */
    maxProperties?: number;

    /**
     * The value of this keyword __MUST__ be an integer.
     * This integer __MUST__ be greater than, or equal to, `0`.
     *
     * An object instance is valid against `minProperties` if its number of
     * properties is greater than, or equal to, the value of this keyword.
     *
     * If this keyword is not present, it may be considered present with a
     * value of `0`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.14
     */
    minProperties?: number;

    /**
     * The value of this keyword __MUST__ be an array.
     * This array __MUST__ have at least one element.
     * Elements of this array __MUST__ be strings, and __MUST__ be unique.
     *
     * An object instance is valid against this keyword if its property set
     * contains all elements in this keyword's array value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.15
     */
    required?: string[];

    /**
     * The value of this keyword __MUST__ be an array.
     * This array __SHOULD__ have at least one element.
     * Elements in the array __SHOULD__ be unique.
     *
     * Elements in the array __MAY__ be of any type, including `null`.
     *
     * An instance validates successfully against this keyword if its value
     * is equal to one of the elements in this keyword's array value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.20
     */
    enum?: any[];

    /**
     * The value of this keyword __MUST__ be a string.
     * Multiple types via an array are not supported.
     *
     * String values __MUST__ be one of the seven
     * primitive types defined by the core specification.
     *
     * An instance matches successfully if its primitive type is one of the
     * types defined by keyword.  Recall: `number` includes `integer`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.21
     */
    type?: Type;

    /**
     * This keyword's value __MUST__ be an array.
     * This array __MUST__ have at least one element.
     *
     * Elements of the array __MUST__ be objects. Each object __MUST__ be a
     * valid Reference Object or Schema Object and not a standard JSON Schema.
     *
     * An instance validates successfully against this keyword if it validates
     * successfully against all schemas defined by this keyword's value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.22
     */
    allOf?: (ISchema | IReference)[];

    /**
     * This keyword's value __MUST__ be an array.
     * This array __MUST__ have at least one element.
     *
     * Elements of the array __MUST__ be objects. Each object __MUST__ be a
     * valid Reference Object or Schema Object and not a standard JSON Schema.
     *
     * An instance validates successfully against this keyword if it validates
     * successfully against at least one schema defined by this keyword's value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.23
     */
    anyOf?: (ISchema | IReference)[];

    /**
     * This keyword's value __MUST__ be an array.
     * This array __MUST__ have at least one element.
     *
     * Elements of the array __MUST__ be objects. Each object __MUST__ be a
     * valid Reference Object or Schema Object and not a standard JSON Schema.
     *
     * An instance validates successfully against this keyword if it validates
     * successfully against exactly one schema defined by this keyword's value.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.24
     */
    oneOf?: (ISchema | IReference)[];

    /**
     * This keyword's value __MUST__ be an object. This object __MUST__ be a
     * valid Reference Object or Schema Object and not a standard JSON Schema.
     *
     * An instance is valid against this keyword if it fails to validate
     * successfully against the schema defined by this keyword.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.25
     */
    not?: ISchema | IReference;

    /**
     * Value __MUST__ be an object and not an array.
     *
     * Inline or referenced schema __MUST__ be of a Schema Object
     * and not a standard JSON Schema.
     *
     * `items` __MUST__ be present if the `type` is `array`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.9
     */
    items?: ISchema | IReference;

    /**
     * Property definitions __MUST__ be a Schema Object
     * and not a standard JSON Schema (inline or referenced).
     *
     * If absent, it can be considered the same as an empty object.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.16
     */
    properties?: {[propertyName: string]: (ISchema | IReference)};

    /**
     * Value can be boolean or object.
     *
     * Inline or referenced schema __MUST__ be of a Schema Object
     * and not a standard JSON Schema.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.18
     */
    additionalProperties?: (ISchema | IReference)[];

    /**
     * While relying on JSON Schema's defined formats, the OAS offers a
     * few additional predefined formats.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#dataTypeFormat
     */
    format?: string | Format;

    /**
     * The default value represents what would be assumed by the consumer of
     * the input as the value of the schema if one is not provided.
     *
     * Unlike JSON Schema, the value __MUST__ conform to the defined type for
     * the Schema Object defined at the same level. For example, if `type` is
     * `string`, then `default` can be `"foo"` but cannot be `1`.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-6.2
     */
    default?: any;

    /**
     * Allows sending a null value for the defined schema.
     *
     * Default value is `false`.
     */
    nullable?: boolean;

    /**
     * Adds support for polymorphism. The discriminator is an object name that
     * is used to differentiate between other schemas which may satisfy the
     * payload description.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schemaComposition
     */
    discriminator?: IDiscriminator;

    /**
     * Relevant only for Schema `properties` definitions.
     *
     * Declares the property as _"read only"_. This means that it __MAY__ be
     * sent as part of a response but __SHOULD NOT__ be sent as part of the
     * request.
     *
     * If the property is marked as `readOnly` being `true` and is in the
     * required list, the required will take effect on the response only.
     *
     * A property __MUST NOT__ be marked as both `readOnly`
     * and `writeOnly` being `true`.
     *
     * Default value is `false`.
     */
    readOnly?: boolean;

    /**
     * Relevant only for Schema `properties` definitions.
     *
     * Declares the property as _"write only"_. Therefore, it __MAY__ be sent as
     * part of a request but __SHOULD NOT__ be sent as part of the response.
     *
     * If the property is marked as `writeOnly` being `true` and is in the
     * required list, the required will take effect on the request only.
     *
     * A property __MUST NOT__ be marked as both `readOnly`
     * and `writeOnly` being `true`.
     *
     * Default value is `false`.
     */
    writeOnly?: boolean;

    /**
     * This __MAY__ be used only on properties schemas.
     *
     * It has no effect on root schemas.
     *
     * Adds additional metadata to describe the XML representation of this property.
     */
    xml?: IXml;

    /**
     * Additional external documentation for this schema.
     */
    externalDocs?: IExternalDocs;

    /**
     * A free-form property to include an example of an instance for this schema.
     *
     * To represent examples that cannot be naturally represented in JSON or YAML,
     * a string value can be used to contain the example with escaping where necessary.
     */
    example?: any;

    /**
     * Specifies that a schema is deprecated and __SHOULD__
     * be transitioned out of usage.
     *
     * Default value is `false`.
     */
    deprecated?: boolean;
}
