import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateCategoryDto {
    @IsNotEmpty()
    name:string

}
