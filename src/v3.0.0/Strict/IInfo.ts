import IContact from './IContact';
import ILicense from './ILicense';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * The object provides metadata about the API.
 *
 * The metadata MAY be used by the clients if needed, and MAY be presented in
 * editing or documentation generation tools for convenience.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#infoObject
 */
export default interface IInfo extends ISpecificationExtension
{
    /**
     * The title of the application.
     *
     * __REQUIRED__
     */
    title: string;

    /**
     * A short description of the application.
     *
     * [CommonMark syntax](http://spec.commonmark.org/)
     * __MAY__ be used for rich text representation.
     */
    description?: string;

    /**
     * A URL to the Terms of Service for the API.
     *
     * __MUST__ be in the format of a URL.
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
     * The version of the OpenAPI document.
     *
     * Which is distinct from the OpenAPI Specification
     * version or the API implementation version.
     *
     * __REQUIRED__
     */
    version: string;
}
