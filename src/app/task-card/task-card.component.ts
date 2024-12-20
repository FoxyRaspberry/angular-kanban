import { Component, Input } from '@angular/core';
import { KanbanTask, KanbanTaskStatus } from '../task-list/tasks.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input({
    required: true,
  }) task: KanbanTask = {
    taskDescription: '',
    taskID: '',
    taskName: '',
    taskStatus: KanbanTaskStatus.ToDo,
  };
}
