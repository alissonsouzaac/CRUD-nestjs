import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { TasksService } from './shared/tasks.service';
import { Tasks } from './shared/tasks';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAll(): Promise<Tasks[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Tasks> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() tasks: Tasks): Promise<Tasks> {
    return this.taskService.create(tasks);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() tasks: Tasks): Promise<Tasks> {
    return this.taskService.update(id, tasks);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.taskService.delete(id);
  }
}
