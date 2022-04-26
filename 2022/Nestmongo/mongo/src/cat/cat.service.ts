import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Model } from 'mongoose';
@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
  async create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    Logger.debug(createdCat, 'hi-----------------------');

    return createdCat.save();
  }

  // findAll() {
  //   return `This action returns all cat`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} cat`;
  // }

  // update(id: number, updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cat`;
  // }
}
