import ISpecificationExtension from './ISpecificationExtension';

/**
 * Contact information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#contact-object
 */
export default interface IContact extends ISpecificationExtension
{
    /**
     * The identifying name of the contact person/organization.
     */
    name?: string;

    /**
     * The URL pointing to the contact information.
     *
     * __MUST__ be in the format of a URL.
     */
    url?: string;

    /**
     * The email address of the contact person/organization.
     *
     * __MUST__ be in the format of an email address.
     */
    email?: string;
}
