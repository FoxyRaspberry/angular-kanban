import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  list: KanbanTask[] = [
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

interface KanbanTask {
  taskDescription: string;
  taskID: string; 
  taskName: string;
}