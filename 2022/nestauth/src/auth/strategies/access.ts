import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
type jwt_payload = {
  sub: string;
  email: string;
};
@Injectable()
export class Access extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'at-secret',
    });
  }
  async validate(payload: jwt_payload) {
    Logger.log('logggin from validation when calling signout');
    return payload;
  }
}
