import { Body, Controller, Post } from '@nestjs/common';
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
  signin() {
    this.authService.signin();
  }

  @Post('/signout')
  signout() {
    this.authService.signout();
  }

  @Post('/refresh')
  refreshtokens() {
    this.authService.refreshtokens();
  }
}
