import { Body, Controller, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AtGuard, RtGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Tokens } from './types/index.type';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() dto: CreateAuthDto): Promise<Tokens> {
    return this.authService.signup(dto);
  }

  @Post('/signin')
  signin(@Body() dto: CreateAuthDto): Promise<Tokens> {
    return this.authService.signin(dto);
  }
  @UseGuards(AtGuard)
  @Post('/signout')
  signout(@Req() req: Request) {
    const user = req.user;
    Logger.log(user, 'loggin from auth-signout controller');
    return this.authService.signout(user['sub']);
  }
  @UseGuards(RtGuard)
  @Post('/refresh')
  refreshtokens(@Req() req: Request) {
    const user = req.user;
    Logger.log(user, 'loggign from refresh=================');
    return this.authService.refreshtokens(user['sub'], user['refreshToken']);
  }
}
