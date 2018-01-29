/**
 * Specification Extensions
 *
 * While the OpenAPI Specification tries to accommodate most use cases,
 * additional data can be added to extend the specification at certain points.
 * The extensions properties are implemented as patterned fields that are
 * always prefixed by "x-".
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#specificationExtensions
 */
export default interface ISpecificationExtension
{
    // NOTE: It is impossible for us to constraint the key to "^x-".
    // This will be done by the builder at runtime.
    [extensionName: string]: any;
}
