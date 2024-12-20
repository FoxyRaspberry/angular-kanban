import { Component, OnInit } from '@angular/core';
import { PhotoCardService } from './photo-card.service';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss'
})
export class PhotoCardComponent implements OnInit {
  protected imgSrc = '';

  constructor(private readonly photoCardService: PhotoCardService) { }

  ngOnInit(): void {
    this.photoCardService.read()
      .subscribe((url: string): void => {
        this.imgSrc = url;
      })
  }
}
