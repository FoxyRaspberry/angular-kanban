import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  readList(): KanbanTask[] {
    return [
      {
        taskDescription: 'Создать компонент с помощью `ng generate component`',
        taskID: 'NGKANBAN-1',
        taskName: 'создать компонент',
        taskStatus: KanbanTaskStatus.Done,
      },
      {
        taskDescription: 'Создать компонент с помощью `ng generate service`',
        taskID: 'NGKANBAN-2',
        taskName: 'создать сервис',
        taskStatus: KanbanTaskStatus.Done,
      },
      {
        taskDescription: 'Создать компонент с помощью `ng generate component`',
        taskID: 'NGKANBAN-3',
        taskName: 'создать компонент карточки',
        taskStatus: KanbanTaskStatus.Done,
      },
      {
        taskDescription: 'Добавить возможность использовать Drag`n`Drop для карточек задач',
        taskID: 'NGKANBAN-4',
        taskName: 'создать Drag`n`Drop',
        taskStatus: KanbanTaskStatus.ToDo,
      },
    ]
  }
}

export interface KanbanTask {
  taskDescription: string;
  taskID: string;
  taskName: string;
  taskStatus: KanbanTaskStatus;
}

export enum KanbanTaskStatus {
  Done = 'Done',
  InProgress = 'InProgress',
  InReview = 'InReview',
  ToDo = 'ToDo',
}
