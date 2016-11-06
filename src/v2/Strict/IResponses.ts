import IReference from './IReference';
import IResponse from './IResponse';

interface IResponses
{
    /**
     * The documentation of responses other than the ones declared for
     * specific HTTP response codes.
     *
     * It can be used to cover undeclared responses.
     *
     * Reference Object can be used to link to a response that is
     * defined at the Swagger Object's responses section.
     */
    default?: IResponse | IReference;

    /**
     * Any HTTP status code can be used as the property name
     * (one property per HTTP status code).
     *
     * Describes the expected response for that HTTP status code.
     * Reference Object can be used to link to a response that is
     * defined at the Swagger Object's responses section.
     */
    [name: number]: IResponse | IReference;
}

export default IResponses;
