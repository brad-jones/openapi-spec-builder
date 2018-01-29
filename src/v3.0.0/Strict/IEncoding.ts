import { SerializationStyle } from '../TypeDefs';
import IHeader from './IHeader';
import IReference from './IReference';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * A single encoding definition applied to a single schema property.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#encoding-object
 */
export default interface IEncoding extends ISpecificationExtension
{
    /**
     * The Content-Type for encoding a specific property.
     *
     * Default value depends on the property type:
     *
     *   - for string with format being binary = `application/octet-stream`;
     *   - for other primitive types = `text/plain`;
     *   - for object = `application/json`;
     *   - for array = the default is defined based on the inner type.
     *
     * The value can be a specific media type (e.g. `application/json`),
     * a wildcard media type (e.g. `image/*`), or a comma-separated list
     * of the two types.
     */
    contentType?: string;

    /**
     * A map allowing additional information to be provided as headers,
     * for example Content-Disposition.
     *
     * Content-Type is described separately and SHALL be ignored in this section.
     *
     * This property SHALL be ignored if the request body media type is not a multipart.
     */
    headers?: { [key: string]: IHeader | IReference };

    /**
     * Describes how a specific property value will be
     * serialized depending on its type.
     *
     * See Parameter Object for details on the style property.
     *
     * The behavior follows the same values as query parameters,
     * including default values.
     *
     * This property SHALL be ignored if the request body media type
     * is not `application/x-www-form-urlencoded`.
     *
     * TODO: Instead of inline string literals we should
     *       create some more shared types.
     */
    style?: SerializationStyle;

    /**
     * When this is true, property values of type array or object generate
     * separate parameters for each value of the array, or key-value-pair
     * of the map.
     *
     * For other types of properties this property has no effect.
     *
     * When style is `form`, the default value is `true`.
     * For all other styles, the default value is `false`.
     *
     * This property SHALL be ignored if the request body media type
     * is not `application/x-www-form-urlencoded`.
     */
    explode?: boolean;

    /**
     * Determines whether the parameter value SHOULD allow reserved characters,
     * as defined by RFC3986 `:/?#[]@!$&'()*+,;=` to be included without
     * percent-encoding.
     *
     * The default value is `false`.
     *
     * This property SHALL be ignored if the request body media type
     * is not `application/x-www-form-urlencoded`.
     */
    allowReserved?: boolean;
}
