import { Injectable } from '@nestjs/common';
import { createTaskDto } from './dtos/create-dto';
import { updateTaskDto } from './dtos/update-dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

 async createTask(task: createTaskDto) {
    const newTask = await this.TaskModel.create(task);
    return newTask;
  }

  getbyId(id: string) {
    return `Task with id ${id}`;
  }

 async getTasks() {
    const listTask = await this.TaskModel.find().select('-__v');
    return listTask;
  }

  updateTask(updateTask: updateTaskDto) {
    return `Task with id ${updateTask.id} has been updated`;
  }

  deleteTask(id: string) {
    return `Task with id ${id} has been deleted`;
  }
}
