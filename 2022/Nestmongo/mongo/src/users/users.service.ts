import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
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
  async login(createUserDto: CreateUserDto) {
    const user = await this.UserModel.findOne({ email: createUserDto.email });
    const validate = await bcrypt.compare(
      createUserDto.password,
      user.password,
    );
    Logger.log(validate);
    if (user && validate) {
      return user;
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  async getall() {
    const allusers = this.UserModel.find({});
    return allusers;
  }

  update(id: number, updateUserDto: UpdateUserDto) {}

  findAll() {}

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
