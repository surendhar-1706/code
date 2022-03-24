import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';

import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class Refresh extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret',
      passReqToCallback: true,
    });
  }
  async validate(req: Request, payload: any) {
    Logger.log(req.headers);
    const refreshToken = await req
      .get('authorization')
      .replace('Bearer', '')
      .trim();
    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');
    Logger.log('printing refresh token from refresh ts', refreshToken);
    return {
      ...payload,
      refreshToken,
    };
  }
}
