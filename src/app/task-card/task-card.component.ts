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
  @Input({ required: true })
  set task(task: KanbanTask) {
    this.taskInternal = task;
    this.statusCSSModifier = statusCSSModifiersMap.get(task.taskStatus) as string;
  }

  protected taskInternal: KanbanTask = {
    taskDescription: '',
    taskID: '',
    taskName: '',
    taskStatus: KanbanTaskStatus.ToDo,
  };

  protected statusCSSModifier = statusCSSModifiersMap.get(KanbanTaskStatus.ToDo) as string;
}

const statusCSSModifiersMap = new Map<KanbanTaskStatus, string>([
  [KanbanTaskStatus.Done, 'app-task-status_done'],
  [KanbanTaskStatus.InProgress, 'app-task-status_in-progress'],
  [KanbanTaskStatus.InReview, 'app-task-status_in-review'],
  [KanbanTaskStatus.ToDo, 'app-task-status_to-do'],
]);
