import { Body, Controller, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
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
  @UseGuards(AuthGuard('jwt'))
  @Post('/signout')
  signout(@Req() req: Request) {
    const user = req.user;
    Logger.log(user, 'loggin from auth-signout controller');
    return this.authService.signout(user['sub']);
  }
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('/refresh')
  refreshtokens(@Req() req: Request) {
    const user = req.user;
    Logger.log(user, 'loggign from refresh=================');
    return this.authService.refreshtokens(user['sub'], user['refreshToken']);
  }
}
