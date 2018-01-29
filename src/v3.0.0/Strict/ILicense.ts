import ISpecificationExtension from './ISpecificationExtension';

/**
 * License information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#license-object
 */
export default interface ILicense extends ISpecificationExtension
{
    /**
     * The license name used for the API.
     *
     * __REQUIRED__
     */
    name: string;

    /**
     * A URL to the license used for the API.
     *
     * __MUST__ be in the format of a URL.
     */
    url?: string;
}
