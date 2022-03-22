import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma:PrismaService){}
  create(createPostDto: CreatePostDto) {
   return this.prisma.post.create({data:createPostDto})
  }

  findAll() {
    return this.prisma.post.findMany()
  }
  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({data:updatePostDto,where:{id}})
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
