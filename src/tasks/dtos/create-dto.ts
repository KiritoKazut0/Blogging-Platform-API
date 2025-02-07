import { IsArray, IsString, MinLength, ArrayNotEmpty, IsNotEmpty, MaxLength } from 'class-validator';

export  class createTaskDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(100)
    content: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(20)
    category: string;

    
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @MinLength(4, { each: true })
    tags: string[];
}