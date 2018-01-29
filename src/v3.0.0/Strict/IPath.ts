import IPathItem from './IPathItem';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * Holds the relative paths to the individual endpoints and their operations.
 *
 * The path is appended to the URL from the Server Object in order to construct
 * the full URL. The Paths MAY be empty, due to ACL constraints.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#paths-object
 */
export default interface IPath extends ISpecificationExtension
{
    /**
     * A relative path to an individual endpoint.
     *
     * The field name __MUST__ begin with a slash.
     *
     * The path is appended (no relative URL resolution) to the expanded URL
     * from the Server Object's url field in order to construct the full URL.
     *
     * Path templating is allowed. When matching URLs, concrete (non-templated)
     * paths would be matched before their templated counterparts.
     *
     * Templated paths with the same hierarchy but different templated names
     * __MUST NOT__ exist as they are identical. In case of ambiguous matching,
     * it's up to the tooling to decide which one to use.
     */
    [path: string]: IPathItem;
}
