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
      },
      {
        taskDescription: 'Создать компонент с помощью `ng generate service`',
        taskID: 'NGKANBAN-2',
        taskName: 'создать сервис',
      },
      {
        taskDescription: 'Создать компонент с помощью `ng generate component`',
        taskID: 'NGKANBAN-3',
        taskName: 'создать компонент карточки',
      },
    ]
  }
}

export interface KanbanTask {
  taskDescription: string;
  taskID: string;
  taskName: string;
}
