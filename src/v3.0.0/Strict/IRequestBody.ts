import IMediaType from './IMediaType';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Describes a single request body.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#request-body-object
 */
export default interface IRequestBody extends ISpecificationExtension
{
    /**
     * A brief description of the request body.
     *
     * This could contain examples of use.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * MAY be used for rich text representation.
     */
    description?: string;

    /**
     * The content of the request body.
     *
     * The key is a media type or media type range and the value describes it.
     *
     * For requests that match multiple keys, only the most specific key is
     * applicable. e.g. `text/plain` overrides `text/*`
     *
     * __REQUIRED__
     */
    content: { [key: string]: IMediaType };

    /**
     * Determines if the request body is required in the request.
     *
     * Defaults to false.
     */
    required?: boolean;
}
