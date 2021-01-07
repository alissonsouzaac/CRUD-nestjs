import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './shared/tasks.service';
import { Tasks } from './shared/tasks';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Tasks[]> {
    return this.taskService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Tasks> {
    return this.taskService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() tasks: Tasks): Promise<Tasks> {
    return this.taskService.create(tasks);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() tasks: Tasks): Promise<Tasks> {
    return this.taskService.update(id, tasks);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.taskService.delete(id);
  }
}
