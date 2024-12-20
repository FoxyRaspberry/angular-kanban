import { Component, OnInit } from '@angular/core';
import { KanbanTask, KanbanTaskStatus, TasksService } from './tasks.service';
import { TaskCardComponent } from '../task-card/task-card.component';
import { BoardColumnComponent } from "../board-column/board-column.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCardComponent, BoardColumnComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  protected doneList: KanbanTask[] = [];
  protected inProgressList: KanbanTask[] = [];
  protected inReviewList: KanbanTask[] = [];
  protected toDoList: KanbanTask[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    const list = this.tasksService.readList();
    // list.forEach((item: KanbanTask): void => {
    //   if (item.taskStatus === KanbanTaskStatus.Done) {
    //     this.doneList.push(item);
    //   } else if (item.taskStatus === KanbanTaskStatus.InProgress) {
    //     this.inProgressList.push(item);
    //   } else if (item.taskStatus === KanbanTaskStatus.InReview) {
    //     this.inReviewList.push(item);
    //   } else if (item.taskStatus === KanbanTaskStatus.ToDo) {
    //     this.toDoList.push(item);
    //   }
    // });

    const actionByTaskStatusMap = new Map<KanbanTaskStatus, (task: KanbanTask) => void>([
      [
        KanbanTaskStatus.Done,
        (task: KanbanTask): void => {
          this.doneList.push(task);
        },
      ],
      [
        KanbanTaskStatus.InProgress,
        (task: KanbanTask): void => {
          this.inProgressList.push(task);
        },
      ],
      [
        KanbanTaskStatus.InReview,
        (task: KanbanTask): void => {
          this.inReviewList.push(task);
        },
      ],
      [
        KanbanTaskStatus.ToDo,
        (task: KanbanTask): void => {
          this.toDoList.push(task);
        },
      ],
    ]);

    list.forEach((item: KanbanTask): void => {
      const action = actionByTaskStatusMap.get(item.taskStatus) as (task: KanbanTask) => void;
      action(item);
    });
  }
}
