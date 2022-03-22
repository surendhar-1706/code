import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, isNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  
            @IsNotEmpty()
            name:string

            @IsNotEmpty()
            @IsEmail()
            email:string

            @IsNotEmpty()
            @MinLength(5)
            password:string

}
