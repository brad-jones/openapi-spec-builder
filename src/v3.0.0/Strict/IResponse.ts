import ILink from './ILink';
import IHeader from './IHeader';
import IReference from './IReference';
import IMediaType from './IMediaType';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Describes a single response from an API Operation,
 * including design-time, static links to operations
 * based on the response.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#response-object
 */
export default interface IResponse extends ISpecificationExtension
{
    /**
     * A short description of the response.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * MAY be used for rich text representation.
     *
     * __REQUIRED__
     */
    description: string;

    /**
     * Maps a header name to its definition.
     *
     * RFC7230 states header names are case insensitive.
     *
     * If a response header is defined with the name "Content-Type",
     * it SHALL be ignored.
     */
    headers?: { [header: string]: IHeader | IReference };

    /**
     * A map containing descriptions of potential response payloads.
     *
     * The key is a media type or media type range and the value describes it.
     * For responses that match multiple keys, only the most specific key is
     * applicable. e.g. `text/plain` overrides `text/*`
     */
    content?: { [header: string]: IMediaType };

    /**
     * A map of operations links that can be followed from the response.
     *
     * The key of the map is a short name for the link, following the naming
     * constraints of the names for Component Objects.
     */
    links?: { [header: string]: ILink | IReference };
}
