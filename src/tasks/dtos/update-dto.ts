import { PartialType } from '@nestjs/mapped-types';
import { createTaskDto } from './create-dto';
import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class updateTaskDto extends PartialType(createTaskDto) {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['pending', 'completed', 'in progress', 'canceled'])
  status: string;
}
