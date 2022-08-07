import {
    Token,
    RefreshToken,
    AuthorizationCode,
} from '@nir-rapidapi/oauth-server-pkce';

export interface ITestExpectedResponses {
    accessToken: Token | false;
    authorizationCode: AuthorizationCode | false;
    refreshToken: RefreshToken | false;
}
