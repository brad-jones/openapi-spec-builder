import IServerVariable from './IServerVariable';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * An object representing a Server.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#server-object
 */
export default interface IServer extends ISpecificationExtension
{
    /**
     * A URL to the target host.
     *
     * This URL supports Server Variables and MAY be relative, to indicate that
     * the host location is relative to the location where the OpenAPI document
     * is being served.
     *
     * Variable substitutions will be made when a variable is named in `{brackets}`.
     *
     * __REQUIRED__
     */
    url: string;

    /**
     * An optional string describing the host designated by the URL.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * MAY be used for rich text representation.
     */
    description?: string;

    /**
     * A map between a variable name and its value.
     *
     * The value is used for substitution in the server's URL template.
     */
    variables?: { [v: string]: IServerVariable };
}
