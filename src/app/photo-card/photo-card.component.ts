import { Component, OnInit } from '@angular/core';
import { PhotoCardService } from './photo-card.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss'
})
export class PhotoCardComponent implements OnInit {
  protected imgSource = new Observable<string>();

  constructor(private readonly photoCardService: PhotoCardService) { }

  ngOnInit(): void {
    this.imgSource = this.photoCardService.read();
  }
}
