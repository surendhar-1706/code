import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
const bcrypt = require('bcrypt');
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10;
    Logger.log(createUserDto.password);
    const hashedpass = await bcrypt.hash(createUserDto.password, saltRounds);
    const newuser = new this.UserModel({
      username: createUserDto.username,
      email: createUserDto.email,
      password: hashedpass,
      profile_pic: createUserDto.profile_pic,
    });
    Logger.log('createduser', newuser);
    return newuser.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
