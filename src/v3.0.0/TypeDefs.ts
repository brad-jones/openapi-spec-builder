// TODO: Document these types

export type Style =
    'matrix' |
    'label' |
    'form' |
    'simple' |
    'spaceDelimited' |
    'pipeDelimited' |
    'deepObject';

export type In =
    'query' |
    'header' |
    'path' |
    'cookie';

export type Type =
    'boolean' |
    'object' |
    'array' |
    'number' |
    'integer' |
    'string' |
    'file';

export type Format =
    'date' |
    'date-time' |
    'email' |
    'hostname' |
    'ipv4' |
    'ipv6' |
    'uri' |
    'uriref' |
    'int32' |
    'int64' |
    'float' |
    'double' |
    'byte' |
    'binary' |
    'password';

export type SecuritySchemeType =
    'apiKey' |
    'http' |
    'oauth2' |
    'openIdConnect';

export type SecuritySchemeIn =
    'query' |
    'header' |
    'cookie';
