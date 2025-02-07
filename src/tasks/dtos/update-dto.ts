import { PartialType } from "@nestjs/mapped-types";
import { createTaskDto } from "./create-dto";
import { IsNotEmpty, IsString } from "class-validator";


export class updateTaskDto extends PartialType(createTaskDto) {
    @IsNotEmpty()
    @IsString()
    id:string
}


