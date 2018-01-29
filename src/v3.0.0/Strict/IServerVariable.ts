import ISpecificationExtension from './ISpecificationExtension';

/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#server-variable-object
 */
export default interface IServerVariable
{
    /**
     * An enumeration of string values to be used if the
     * substitution options are from a limited set.
     */
    enum?: string[];

    /**
     * The default value to use for substitution, and to send,
     * if an alternate value is not supplied.
     *
     * Unlike the Schema Object's default, this value
     * __MUST__ be provided by the consumer.
     *
     * __REQUIRED__
     */
    default: string;

    /**
     * An optional description for the server variable.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * MAY be used for rich text representation.
     */
    description?: string;
}
