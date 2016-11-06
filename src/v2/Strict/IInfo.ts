import IContact from "./IContact";
import ILicense from "./ILicense";

/**
 * The object provides metadata about the API.
 *
 * The metadata can be used by the clients if needed,
 * and can be presented in the Swagger-UI for convenience.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#info-object
 */
interface IInfo
{
    /**
     * Required. The title of the application.
     */
    title: string;

    /**
     * A short description of the application.
     *
     * GFM syntax can be used for rich text representation.
     */
    description?: string;

    /**
     * The Terms of Service for the API.
     */
    termsOfService?: string;

    /**
     * The contact information for the exposed API.
     */
    contact?: IContact;

    /**
     * The license information for the exposed API.
     */
    license?: ILicense;

    /**
     * Required Provides the version of the application API.
     *
     * > NOTE: Not to be confused with the specification version.
     */
    version: string;
}

export default IInfo;
