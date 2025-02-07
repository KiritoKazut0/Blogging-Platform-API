import { Injectable } from '@nestjs/common';
import { createTaskDto } from './dtos/create-dto';
import { updateTaskDto } from './dtos/update-dto';

@Injectable()
export class TasksService {

    constructor(){}

    createTask(task: createTaskDto){
        return `Task with title ${task.title} has been created`
    }

    getbyId(id: string){
        return `Task with id ${id}`
    }

    getTasks(){
        return 'All tasks'
    }

    updateTask(updateTask: updateTaskDto){
        return `Task with id ${updateTask.id} has been updated`
    }

    deleteTask(id: string){
        return `Task with id ${id} has been deleted`
    }

}
    