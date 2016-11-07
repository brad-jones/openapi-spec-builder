import IItems from './IItems';

/**
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#header-object
 */
interface IHeader extends IItems
{
    /**
     * The header name. ie: `Content-Type`.
     */
    name: string;

    /**
     * A short description of the header.
     */
    description?: string;
}

export default IHeader;
