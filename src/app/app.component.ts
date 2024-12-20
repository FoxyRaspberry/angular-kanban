import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { PhotoCardComponent } from "./photo-card/photo-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    PhotoCardComponent,
    TaskListComponent,
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-kanban';
}
