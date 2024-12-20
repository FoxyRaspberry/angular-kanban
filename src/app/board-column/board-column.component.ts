import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-column',
  standalone: true,
  imports: [],
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.scss'
})
export class BoardColumnComponent {
  @Input({ required: true })
  title: string = '';
}
