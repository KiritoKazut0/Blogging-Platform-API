import { Controller, Body, HttpCode, Post, ValidationPipe, Get, Put, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from './dtos/create-dto';
import { updateTaskDto } from './dtos/update-dto';



@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService ){}

    @HttpCode(201)
    @Post()
    createTask(@Body(new ValidationPipe) createTask: createTaskDto ){
        return this.taskService.createTask(createTask)
    }

    @Get()
    listTasks(){
        return this.taskService.getTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id')id: string){
        return this.taskService.getbyId(id)
    }

    @Put()
    updateTask(@Body(new ValidationPipe) updateTask: updateTaskDto){
        return this.taskService.updateTask(updateTask)
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(id)
    }
}
