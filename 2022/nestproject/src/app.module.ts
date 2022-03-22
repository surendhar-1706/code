import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [ BookmarkModule, AuthModule, UserModule, PrismaModule],
  
})
export class AppModule {}
