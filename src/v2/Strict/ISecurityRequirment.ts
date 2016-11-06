/**
 * Lists the required security schemes to execute this operation.
 *
 * The object can have multiple security schemes declared in it which are
 * all required (that is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a
 * security scheme declared in the Security Definitions.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-requirement-object
 */
interface ISecurityRequirment
{
    /**
     * Each name must correspond to a security scheme
     * which is declared in the Security Definitions.
     *
     * If the security scheme is of type "oauth2", then the value is a list of
     * scope names required for the execution. For other security scheme types,
     * the array MUST be empty.
     */
    [name: string]: string[];
}

export default ISecurityRequirment;
