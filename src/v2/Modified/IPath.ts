import IOperation from './IOperation';

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
}

export default IPath;
