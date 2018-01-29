import IExternalDocs from './IExternalDocs';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Adds metadata to a single tag that is used by the Operation Object.
 *
 * It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#tag-object
 */
export default interface ITag extends ISpecificationExtension
{
    /**
     * The name of the tag.
     *
     * __REQUIRED__
     */
    name: string;

    /**
     * A short description for the tag.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * __MAY__ be used for rich text representation.
     */
    description?: string;

    /**
     * Additional external documentation for this tag.
     */
    externalDocs?: IExternalDocs;
}
