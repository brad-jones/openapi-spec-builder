import ISpecificationExtension from './ISpecificationExtension';

/**
 * Allows referencing an external resource for extended documentation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#external-documentation-object
 */
export default interface IExternalDocs extends ISpecificationExtension
{
    /**
     * A short description of the target documentation.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * MAY be used for rich text representation.
     */
    description?: string;

    /**
     * The URL for the target documentation.
     *
     * Value __MUST__ be in the format of a URL.
     *
     * __REQUIRED__
     */
    url: string;
}
