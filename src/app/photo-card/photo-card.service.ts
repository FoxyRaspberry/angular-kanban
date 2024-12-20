import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoCardService {
  constructor(private readonly httpClient: HttpClient) {}

  read(): Observable<string> {
    return this.httpClient.get<DogAPIResponse>(dogURL)
      .pipe(map(({ message }: DogAPIResponse): string => message));
  }
}

const dogURL = 'https://dog.ceo/api/breeds/image/random';

interface DogAPIResponse {
  readonly message: string;
}
