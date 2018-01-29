import IPathItem from './IPathItem';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * A map of possible out-of band callbacks related to the parent operation.
 *
 * Each value in the map is a Path Item Object that describes a set of requests
 * that may be initiated by the API provider and the expected responses.
 *
 * The key value used to identify the callback object is an expression,
 * evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#callback-object
 */
export default interface ICallback extends ISpecificationExtension
{
    /**
     * A Path Item Object used to define a callback request and expected responses.
     */
    [expression: string]: IPathItem;
}
