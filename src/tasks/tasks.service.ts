import { Injectable } from '@nestjs/common';
import { createTaskDto } from './dtos/create-dto';
import { updateTaskDto } from './dtos/update-dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  async createTask(task: createTaskDto): Promise<Task> {
    try {
      const newTask = (await this.TaskModel.create(task));
      return newTask;
    } catch (error) {
      throw new HttpException(
        'Failed to create task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getbyId(id: string): Promise<Task> {
    const task = await this.TaskModel.findById(id).select('-__v');
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async getTasks(): Promise<Task[]> {
    const listTask = await this.TaskModel.find().select('-__v');
    return listTask;
  }

  async updateTask(
    id: string,
    updateTask: updateTaskDto,
  ): Promise<Task | null> {
    try {
      const taskUpdate = await this.TaskModel.findByIdAndUpdate(
        id,
        updateTask,
        {
          new: true,
        },
      ).select('-__v');

      if (!taskUpdate) {
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
      }

      return taskUpdate;
    } catch (error) {
      throw new HttpException(
        'Failed to update task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteTask(id: string): Promise<void> {
    const deletedTask = this.TaskModel.findByIdAndDelete(id).catch(() => {
      throw new HttpException(
        'Failed to delete task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (!deletedTask) {
      console.log(deletedTask);
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }
}
