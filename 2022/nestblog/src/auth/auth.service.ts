import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  
  private userService:UserService;
  constructor(private moduleRef:ModuleRef){
    this.userService = this.moduleRef.get(UserService,{strict:false})
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  registerUser(CreateUserDto:CreateUserDto){}
}
