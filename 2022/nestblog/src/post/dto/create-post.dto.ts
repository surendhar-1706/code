
import { IsNotEmpty } from "class-validator"
import { ApiProperty, ApiBody } from '@nestjs/swagger';
export class CreatePostDto {
 
    @IsNotEmpty()
    title:string

    @IsNotEmpty()
    body:string

}
