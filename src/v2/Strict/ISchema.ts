import { FormatType, Type } from '../TypeDefs';

import IExternalDocs from './IExternalDocs';
import ISharedSchema from './ISharedSchema';
import IXml from './IXml';

/**
 * The Schema Object allows the definition of input and output data types.
 *
 * These types can be objects, but also primitives and arrays. This object is
 * based on the JSON Schema Specification Draft 4 and uses a predefined subset
 * of it. On top of this subset, there are extensions provided by this
 * specification to allow for more complete documentation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schema-object
 */
interface ISchema extends ISharedSchema
{
    /**
     * A JSON Reference.
     *
     * @see https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03
     */
    $ref?: string;

    /**
     * A title for the schema object.
     */
    title?: string;

    /**
     * A short description of the schema object.
     *
     * GFM syntax can be used for rich text representation.
     */
    description?: string;

    /**
     * Required if type is "array". Describes the type of items in the array.
     */
    items?: ISchema;

    /**
     * Required if type is "object". A recursive structure,
     * ie: each property of a schema is defined by another schema.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor64
     */
    properties?: { [name: string]: ISchema };

    /**
     * Use this to describe objects with dynamic keys, much the same
     * as the above typescript definition of the properties key.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor64
     */
    additionalProperties?: boolean|ISchema;

    /**
     * Adds support for polymorphism. The discriminator is the schema property
     * name that is used to differentiate between other schema that inherit
     * this schema.
     *
     * The property name used MUST be defined at this schema and it MUST be in
     * the required property list. When used, the value MUST be the name of this
     * schema or any schema that inherits it.
     */
    discriminator?: string;

    /**
     * Relevant only for Schema "properties" definitions.
     * Declares the property as "read only".
     *
     * This means that it MAY be sent as part of a response but MUST NOT be sent
     * as part of the request. Properties marked as readOnly being true SHOULD
     * NOT be in the required list of the defined schema.
     *
     * Default value is false.
     */
    readOnly?: boolean;

    /**
     * Adds Additional metadata to describe the
     * XML representation format of this property.
     *
     * This MAY be used only on properties schemas.
     * It has no effect on root schemas.
     */
    xml?: IXml;

    /**
     * Additional external documentation.
     */
    externalDocs?: IExternalDocs;

    /**
     * A free-form property to include an example of an instance for this schema.
     */
    example?: any;

    /**
     * An object instance is valid against "maxProperties" if its number
     * of properties is less than, or equal to, the value of this keyword.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor54
     */
    maxProperties?: number;

    /**
     * An object instance is valid against "minProperties" if its number
     * of properties is greater than, or equal to, the value of this keyword.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor57
     */
    minProperties?: any;

    /**
     * An object instance is valid against this keyword if its property
     * set contains all elements in this keyword's array value.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor61
     */
    required?: string[];

    /**
     * An instance validates successfully against this keyword if it validates
     * successfully against all schemas defined by this keyword's value.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor82
     */
    allOf?: ISchema[];
}

export default ISchema;
