import IExternalDocs from "./IExternalDocs";

/**
 * Allows adding meta data to a single tag that is used by the Operation Object.
 * It is not mandatory to have a Tag Object per tag used there.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#tag-object
 */
interface ITag
{
    /**
     * Required. The name of the tag.
     */
    name: string;

    /**
     * A short description for the tag.
     * GFM syntax can be used for rich text representation.
     */
    description?: string;

    /**
     * Additional external documentation for this tag.
     */
    externalDocs?: IExternalDocs;
}

export default ITag;
