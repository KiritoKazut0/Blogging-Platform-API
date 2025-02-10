import {
  IsArray,
  IsString,
  MinLength,
  ArrayNotEmpty,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class createTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(200)
  content: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(50)
  category: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags: string[];
}
