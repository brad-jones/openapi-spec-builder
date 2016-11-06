import IOperation from './IOperation';
import IParameter from './IParameter';
import IReference from './IReference';

/**
 * Describes the operations available on a single path. A Path Item may be
 * empty, due to ACL constraints. The path itself is still exposed to the
 * documentation viewer but they will not know which operations and
 * parameters are available.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#path-item-object
 */
interface IPath
{
    /**
     * A JSON Reference.
     *
     * @see https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03
     */
    $ref?: string;

    /**
     * A definition of a GET operation on this path.
     */
    get?: IOperation;

    /**
     * A definition of a PUT operation on this path.
     */
    put?: IOperation;

    /**
     * A definition of a POST operation on this path.
     */
    post?: IOperation;

    /**
     * A definition of a DELETE operation on this path.
     */
    delete?: IOperation;

    /**
     * A definition of a OPTIONS operation on this path.
     */
    options?: IOperation;

    /**
     * A definition of a HEAD operation on this path.
     */
    head?: IOperation;

    /**
     * A definition of a PATCH operation on this path.
     */
    patch?: IOperation;

    /**
     * A list of parameters that are applicable for
     * all the operations described under this path.
     *
     * These parameters can be overridden at the operation level,
     * but cannot be removed there. The list MUST NOT include duplicated
     * parameters. A unique parameter is defined by a combination of a
     * name and location. There can be one "body" parameter at most.
     */
    parameters?: Array<IParameter | IReference>;
}

export default IPath;
