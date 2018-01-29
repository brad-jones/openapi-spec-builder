import ITag from './ITag';
import IInfo from './IInfo';
import IPath from './IPath';
import IServer from './IServer';
import IComponent from './IComponent';
import IExternalDocs from './IExternalDocs';
import ISecurityRequirement from './ISecurityRequirement';
import ISpecificationExtension from './ISpecificationExtension';

/**
 * OpenAPI Document
 *
 * This is the root document object of the OpenAPI document.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#openapi-object
 */
export default interface IOpenAPI extends ISpecificationExtension
{
    /**
     * This string __MUST__ be the semantic version number of the OpenAPI
     * Specification version that the OpenAPI document uses.
     *
     * The openapi field __SHOULD__ be used by tooling specifications and
     * clients to interpret the OpenAPI document. This is not related to the
     * API `info.version` string.
     *
     * __REQUIRED__
     */
    openapi: string;

    /**
     * Provides metadata about the API.
     *
     * The metadata MAY be used by tooling as required.
     *
     * __REQUIRED__
     */
    info: IInfo;

    /**
     * Provide connectivity information to a target server.
     *
     * If the servers property is not provided, or is an empty array,
     * the default value would be a Server Object with a url value of `/`.
     */
    servers?: IServer[];

    /**
     * The available paths and operations for the API.
     *
     * __REQUIRED__
     */
    paths: IPath;

    /**
     * An element to hold various schemas for the specification.
     */
    components?: IComponent;

    /**
     * A declaration of which security mechanisms can be used across the API.
     *
     * The list of values includes alternative security requirement objects
     * that can be used. Only one of the security requirement objects need to
     * be satisfied to authorize a request. Individual operations can override
     * this definition.
     */
    security?: ISecurityRequirement;

    /**
     * A list of tags used by the specification with additional metadata.
     *
     * The order of the tags can be used to reflect on their order by the
     * parsing tools. Not all tags that are used by the Operation Object must
     * be declared. The tags that are not declared MAY be organized randomly
     * or based on the tools' logic. Each tag name in the list MUST be unique.
     */
    tags?: ITag[];

    /**
     * Additional external documentation.
     */
    externalDocs?: IExternalDocs;
}
