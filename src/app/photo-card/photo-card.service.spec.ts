import { TestBed } from '@angular/core/testing';

import { PhotoCardService } from './photo-card.service';

describe('PhotoCardService', () => {
  let service: PhotoCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
