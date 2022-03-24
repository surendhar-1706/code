import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcryptjs';
import { Tokens } from './types/index.type';
import { JwtService } from '@nestjs/jwt';
import { throwError } from 'rxjs';
import { UpdateAuthDto } from './dto/update-auth.dto';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtservice: JwtService) {}
  hashdata(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const accessToken = await this.jwtservice.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: 'at-secret',
        expiresIn: 15 * 60,
      },
    );
    const refreshToken = await this.jwtservice.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: 'rt-secret',
        expiresIn: 60 * 60 * 24 * 7,
      },
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
  async updatehash(userId: number, refresh_token: string) {
    const hash = await this.hashdata(refresh_token);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRt: hash },
    });
  }

  async signup(dto: CreateAuthDto): Promise<Tokens> {
    const hash = await this.hashdata(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        hash: hash,
      },
    });
    const tokens = await this.getTokens(user.id, user.email);
    const dummy = await this.updatehash(user.id, tokens.refresh_token);
    return tokens;
  }
  async signin(dto: CreateAuthDto): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new ForbiddenException('No user found :((');
    const checkpassword = await bcrypt.compare(dto.password, user.hash);
    if (!checkpassword)
      throw new ForbiddenException('password not matching !!!!');
    Logger.log(checkpassword, 'printing true or false');
    const tokens = await this.getTokens(user.id, user.email);
    const dummy = await this.updatehash(user.id, tokens.refresh_token);
    return tokens;
  }
  async signout(userId: number) {
    const user = await this.prisma.user.updateMany({
      where: { id: userId, hashedRt: { not: null } },
      data: { hashedRt: null },
    });
  }
  async refreshtokens(userId: number, rt: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ForbiddenException('No user found');
    }
    const rtMatches = await bcrypt.compare(rt, user.hashedRt);
    if (!rtMatches) {
      throw new ForbiddenException('refresh tokens dont match');
    }
    const tokens = await this.getTokens(user.id, user.email);
    const dummy = await this.updatehash(user.id, tokens.refresh_token);
    return tokens;
  }
}
