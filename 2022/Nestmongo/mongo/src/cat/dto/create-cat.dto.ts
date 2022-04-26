import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
