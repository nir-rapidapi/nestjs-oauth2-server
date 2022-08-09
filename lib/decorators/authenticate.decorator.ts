import {
    UseGuards,
    SetMetadata,
    applyDecorators,
} from '@nestjs/common';
import { AuthenticateOptions } from '@nir-rapidapi/node-oauth2-server-ts';

import { OAuth2ServerAuthenticationGuard } from '../guards';
import { OAUTH2_METHOD_OPTIONS_METADATA } from '../oauth2-server.constants';

export const OAuth2Authenticate = (
    options: AuthenticateOptions = {},
): ClassDecorator & MethodDecorator =>
    applyDecorators(
        SetMetadata(OAUTH2_METHOD_OPTIONS_METADATA, options),
        UseGuards(OAuth2ServerAuthenticationGuard),
    );
