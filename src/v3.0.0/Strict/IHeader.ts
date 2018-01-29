import { SerializationStyle } from '../TypeDefs';
import ISchema from './ISchema';
import IExample from './IExample';
import IReference from './IReference';
import IMediaType from './IMediaType';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * The Header Object follows the structure of the Parameter Object
 * with the following changes:
 *
 *   - `name` __MUST NOT__ be specified, it is given in the corresponding headers map.
 *   - `in` __MUST NOT__ be specified, it is implicitly in header.
 *   - All traits that are affected by the location __MUST__ be applicable to a location of header (for example, style).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#header-object
 */
export default interface IHeader extends ISpecificationExtension
{
    /**
     * A brief description of the parameter.
     *
     * This could contain examples of use.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * MAY be used for rich text representation.
     */
    description?: string;

    /**
     * Determines whether this parameter is mandatory.
     *
     * If the parameter location is `path`, this property is __REQUIRED__ and
     * its value __MUST__ be true.
     *
     * Otherwise, the property MAY be included and its default value is false.
     */
    required?: boolean;

    /**
     * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
     */
    deprecated?: boolean;

    /**
     * Sets the ability to pass empty-valued parameters.
     *
     * This is valid only for query parameters and allows
     * sending a parameter with an empty value.
     *
     * Default value is false.
     *
     * If style is used, and if behavior is n/a (cannot be serialized),
     * the value of allowEmptyValue SHALL be ignored.
     */
    allowEmptyValue?: boolean;

    /**
     * Describes how the parameter value will be serialized
     * depending on the type of the parameter value.
     *
     * Default values (based on value of in):
     *   - for query = form;
     *   - for path = simple;
     *   - for header = simple;
     *   - for cookie = form.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#style-values
     *
     * TODO: Ensure the rules defined in the above link are validated at runtime.
     */
    style?: SerializationStyle;

    /**
     * When this is true, parameter values of type array or object generate
     * separate parameters for each value of the array or key-value pair of
     * the map.
     *
     * For other types of parameters this property has no effect.
     *
     * When style is form, the default value is true.
     *
     * For all other styles, the default value is false.
     */
    explode?: boolean;

    /**
     * Determines whether the parameter value SHOULD allow reserved characters,
     * as defined by RFC3986 `:/?#[]@!$&'()*+,;=` to be included without
     * percent-encoding.
     *
     * This property only applies to parameters with an `in` value of `query`.
     *
     * The default value is false.
     */
    allowReserved?: boolean;

    /**
     * The schema defining the type used for the parameter.
     */
    schema?: ISchema | IReference;

    /**
     * Example of the media type.
     *
     * The example SHOULD match the specified schema and encoding properties
     * if present. The example object is mutually exclusive of the examples
     * object.
     *
     * Furthermore, if referencing a schema which contains an example,
     * the example value SHALL override the example provided by the schema.
     *
     * To represent examples of media types that cannot naturally be represented
     * in JSON or YAML, a string value can contain the example with escaping
     * where necessary.
     */
    example?: any;

    /**
     * Examples of the media type.
     *
     * Each example SHOULD contain a value in the correct format as specified
     * in the parameter encoding. The examples object is mutually exclusive of
     * the example object.
     *
     * Furthermore, if referencing a schema which contains an example,
     * the examples value SHALL override the example provided by the schema.
     */
    examples?: { [key: string]: IExample | IReference };

    /**
     * For more complex scenarios, the content property can define the
     * media type and schema of the parameter.
     *
     * A parameter __MUST__ contain either a schema property,
     * or a content property, but not both.
     *
     * When example or examples are provided in conjunction with the
     * schema object, the example __MUST__ follow the prescribed
     * serialization strategy for the parameter.
     *
     * The key is the media type and the value describes it.
     *
     * The map __MUST__ only contain one entry.
     */
    content?: { [key: string]: IMediaType };
}
