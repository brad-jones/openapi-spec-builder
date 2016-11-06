/**
 * License information for the exposed API.
 *
 * @https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#license-object
 */
interface ILicense
{
    /**
     * Required. The license name used for the API.
     */
    name?: string;

    /**
     * A URL to the license used for the API.
     *
     * MUST be in the format of a URL.
     */
    url?: string;
}

export default ILicense;
