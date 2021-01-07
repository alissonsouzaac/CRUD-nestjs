import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks';

@Injectable()
export class TasksService {
  tasks: Tasks[] = [
    { id: 1, description: 'tarefa 1', completed: false },
    { id: 2, description: 'tarefa 2', completed: false },
    { id: 3, description: 'tarefa 3', completed: false },
    { id: 4, description: 'tarefa 4', completed: false },
    { id: 5, description: 'tarefa 5', completed: false },
    { id: 6, description: 'tarefa 6', completed: false },
    { id: 7, description: 'tarefa 7', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);

    return task;
  }

  create(task: Tasks) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Tasks) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
