import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [PrismaModule, UserModule, CategoryModule, PostModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
