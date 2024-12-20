import { Component, OnInit } from '@angular/core';
import { KanbanTask, TasksService } from './tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  list: KanbanTask[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.list = this.tasksService.readList();
  }
}
