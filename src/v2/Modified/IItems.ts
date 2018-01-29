import { FormatType } from '../TypeDefs';
import ISharedSchema from './ISharedSchema';

/**
 * A limited subset of JSON-Schema's items object.
 *
 * It is used by parameter definitions that are not
 * located in "body" as well as header definitions.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#items-object
 */
interface IItems extends ISharedSchema
{
    /**
     * Required. The type of the object.
     *
     * The value MUST be one of "string", "number", "integer", "boolean",
     * or "array". Files and models are not allowed.
     */
    type: 'string' | 'number' | 'integer' | 'boolean' | 'array';

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
     *
     * Default value is csv.
     */
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes';
}

export default IItems;
