import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

  constructor(@InjectModel('Tasks') private readonly taskModel: Model<Tasks>) { }

  async getAll() {
    return await this.taskModel.find().exec();
  }

  async getById(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  async create(task: Tasks) {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async update(id: string, task: Tasks) {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id}).exec();
  }
}
