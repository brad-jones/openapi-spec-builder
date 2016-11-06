import { Type, FormatType } from '../../Enums';

interface ISharedSchema
{
    /**
     * The type that the schema is describing.
     * 
     * > NOTE: In some cases the type can be omitted and it will be inferred
     *         based on other properties values. However good practise would
     *         suggest the type is defined regardless.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
     */
    type?: Type;

    /**
     * The extending format for the previously mentioned type.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
     */
    format?: FormatType;

    /**
     * Used to supply a default JSON value associated with a particular schema.
     * 
     * > NOTE: Unlike JSON Schema this value MUST conform
     *         to the defined type for the data type.
     *
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor101. 
     */
    default?: any;

    /**
     * Successful validation depends on the presence
     * and value of "exclusiveMaximum":
     * 
     * - if "exclusiveMaximum" is not present, or has boolean value false,
     *   then the instance is valid if it is lower than, or equal to,
     *   the value of "maximum";
     * 
     * - if "exclusiveMaximum" has boolean value true,
     *   the instance is valid if it is strictly lower
     *   than the value of "maximum".
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor17.
     */
    maximum?: number;

    /**
     * If "exclusiveMaximum" is present, "maximum" MUST also be present.
     * "exclusiveMaximum", if absent, may be considered as being present
     * with boolean value false.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor17.
     */
    exclusiveMaximum?: boolean;

    /**
     * Successful validation depends on the presence
     * and value of "exclusiveMinimum":
     * 
     * - if "exclusiveMinimum" is not present, or has boolean value false,
     *   then the instance is valid if it is greater than, or equal to,
     *   the value of "minimum";
     * 
     * - if "exclusiveMinimum" is present and has boolean value true,
     *   the instance is valid if it is strictly greater than the value
     *   of "minimum".
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor21
     */
    minimum?: number;

    /**
     * If "exclusiveMinimum" is present, "minimum" MUST also be present.
     * "exclusiveMinimum", if absent, may be considered as being present
     * with boolean value false.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor21
     */
    exclusiveMinimum?: boolean;

    /**
     * A string instance is valid against this keyword if its length
     * is less than, or equal to, the value of this keyword.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor26
     */
    maxLength?: number;

    /**
     * A string instance is valid against this keyword if its length
     * is greater than, or equal to, the value of this keyword.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor29
     */
    minLength?: number;

    /**
     * This string SHOULD be a valid regular expression,
     * according to the ECMA 262 regular expression dialect.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor33
     */
    pattern?: string;

    /**
     * An array instance is valid against "maxItems" if its size
     * is less than, or equal to, the value of this keyword.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor42
     */
    maxItems?: number;

    /**
     * An array instance is valid against "minItems" if its size
     * is greater than, or equal to, the value of this keyword.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor45
     */
    minItems?: number;

    /**
     * If it has boolean value true, the instance validates successfully
     * if all of its elements are unique.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor49
     */
    uniqueItems?: boolean;

    /**
     * An instance validates successfully against this keyword if its value
     * is equal to one of the elements in this keyword's array value.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor76
     */
    enum?: any[];

    /**
     * A numeric instance is valid against "multipleOf" if the result of the
     * division of the instance by this keyword's value is an integer.
     * 
     * @see http://json-schema.org/latest/json-schema-validation.html#anchor14
     */
    multipleOf?: number;
}

export default ISharedSchema;