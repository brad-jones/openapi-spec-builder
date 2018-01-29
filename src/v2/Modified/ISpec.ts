import IEndpoint from "./IEndpoint";
import IExternalDocs from "./IExternalDocs";
import IInfo from "./IInfo";
import IParameter from "./IParameter";
import ISchema from "./ISchema";
import ISecurityRequirment from './ISecurityRequirment';
import ISecuritySchema from "./ISecuritySchema";
import ITag from "./ITag";
import { Schemes } from '../TypeDefs';

/**
 * This is the root document object for the API specification.
 * It combines what previously was the Resource Listing and API Declaration
 * (version 1.2 and earlier) together into one document.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
 */
interface ISpec
{
    /**
     * Required. Provides metadata about the API.
     *
     * The metadata can be used by the clients if needed.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#info-object
     */
    info: IInfo;

    /**
     * The host (name or ip) serving the API.
     *
     * This MUST be the host only and does not include the scheme nor sub-paths.
     * It MAY include a port. If the host is not included, the host serving the
     * documentation is to be used (including the port).
     *
     * > NOTE: The host does not support path templating.
     */
    host?: string;

    /**
     * The base path on which the API is served, which is relative to the host.
     *
     * If it is not included, the API is served directly under the host.
     * The value MUST start with a leading slash (/).
     *
     * > NOTE: The basePath does not support path templating.
     */
    basePath?: string;

    /**
     * The transfer protocol of the API.
     *
     * Values MUST be from the list: "http", "https", "ws", "wss".
     * If the schemes is not included, the default scheme to be used
     * is the one used to access the Swagger definition itself.
     */
    schemes?: Schemes[];

    /**
     * A list of MIME types the APIs can consume.
     *
     * This is global to all APIs but can be overridden on specific API calls.
     * Value MUST be as described under Mime Types.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mime-types
     */
    consumes?: string[];

    /**
     * A list of MIME types the APIs can produce.
     *
     * This is global to all APIs but can be overridden on specific API calls.
     * Value MUST be as described under Mime Types.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mime-types
     */
    produces?: string[];

    /**
     * Required. The available paths and operations for the API.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object
     */
    endpoints: IEndpoint[];

    /**
     * Security scheme definitions that can be used across the specification.
     *
     * This does not enforce the security schemes on the operations
     * and only serves to provide the relevant details for each scheme.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object
     */
    securityDefinitions?: { [name: string]: ISecuritySchema };

    /**
     * A declaration of which security schemes are applied for the API as a whole.
     *
     * The list of values describes alternative security schemes that can be
     * used (that is, there is a logical OR between the security requirements).
     * Individual operations can override this definition.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-requirement-object
     */
    security?: ISecurityRequirment[];

    /**
     * A list of tags used by the specification with additional metadata.
     *
     * The order of the tags can be used to reflect on their order by the
     * parsing tools. Not all tags that are used by the Operation Object must
     * be declared. The tags that are not declared may be organized randomly
     * or based on the tools' logic. Each tag name in the list MUST be unique.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#tag-object
     */
    tags?: ITag[];

    /**
     * Additional external documentation.
     *
     * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#external-documentation-object
     */
    externalDocs?: IExternalDocs;
}

export default ISpec;
