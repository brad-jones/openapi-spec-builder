/**
 * Lists the required security schemes to execute this operation.
 *
 * The name used for each property __MUST__ correspond to a security scheme
 * declared in the Security Schemes under the Components Object.
 *
 * Security Requirement Objects that contain multiple schemes require that all
 * schemes __MUST__ be satisfied for a request to be authorized. This enables
 * support for scenarios where multiple query parameters or HTTP headers are
 * required to convey security information.
 *
 * When a list of Security Requirement Objects is defined on the Open API object
 * or Operation Object, only one of Security Requirement Objects in the list
 * needs to be satisfied to authorize the request.

 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#security-requirement-object
 */
export default interface ISecurityRequirement
{
    /**
     * Each name __MUST__ correspond to a security scheme which is declared in
     * the Security Schemes under the Components Object.
     *
     * If the security scheme is of type `oauth2` or `openIdConnect`, then the
     * value is a list of scope names required for the execution.
     *
     * For other security scheme types, the array __MUST__ be empty.
     */
    [name: string]: [string];
}
