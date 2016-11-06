import { FormatType } from '../../Enums';
import IItems from './IItems';
import ISchema from './ISchema';
import ISharedSchema from './ISharedSchema';

/**
 * Describes a single operation parameter.
 *
 * A unique parameter is defined by a combination of a name and location.
 * There are five possible parameter types, "path", "query", "header",
 * "body", "form".
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameter-object
 */
interface IParameter extends ISharedSchema
{
    /**
     * Required. The name of the parameter. Parameter names are case sensitive.
     *
     * If in is "path", the name field MUST correspond to the associated path
     * segment from the path field in the Paths Object.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#path-templating
     *
     * For all other cases, the name corresponds to the parameter name used
     * based on the in property.
     */
    name: string;

    /**
     * Required. The location of the parameter.
     *
     * Possible values are "query", "header", "path", "formData" or "body".
     */
    in: 'query' | 'header' | 'path' | 'formData' | 'body';

    /**
     * A brief description of the parameter. This could contain examples of use.
     *
     * GFM syntax can be used for rich text representation.
     */
    description?: string;

    /**
     * Determines whether this parameter is mandatory.
     *
     * If the parameter is in "path", this property is required and its value
     * MUST be true. Otherwise, the property MAY be included and its default
     * value is false.
     */
    required?: boolean;

    /**
     * The schema defining the type used for the body parameter.
     *
     * > NOTE: Required when `in` is set to `body`.
     */
    schema?: ISchema;

    /**
     * Required when `in` is not set to `body`. The type of the parameter.
     *
     * Since the parameter is not located at the request body, it is limited to
     * simple types (that is, not an object). The value MUST be one of "string",
     * "number", "integer", "boolean", "array" or "file".
     *
     * If type is "file", the consumes MUST be either "multipart/form-data",
     * "application/x-www-form-urlencoded" or both and the parameter MUST
     * e in "formData".
     */
    type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'file';

    /**
     * Sets the ability to pass empty-valued parameters.
     *
     * This is valid only for either query or formData parameters and allows you
     * to send a parameter with a name only or an empty value.
     *
     * Default value is false.
     */
    allowEmptyValue?: boolean;

    /**
     * Required if type is "array". Describes the type of items in the array.
     */
    items?: IItems;

    /**
     * Determines the format of the array if type array is used.
     *
     * Possible values are:
     *  - csv - comma separated values foo,bar.
     *  - ssv - space separated values foo bar.
     *  - tsv - tab separated values foo\tbar.
     *  - pipes - pipe separated values foo|bar.
     *  - multi - corresponds to multiple parameter instances instead of
     *            multiple values for a single instance foo=bar&foo=baz.
     *            This is valid only for parameters in "query" or "formData".
     *
     * Default value is csv.
     */
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
}

export default IParameter;
