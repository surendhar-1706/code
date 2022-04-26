import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatModule } from './cat/cat.module';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    CatModule,
    UsersModule,
    PostsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
