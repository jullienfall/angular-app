import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url);
  }
}
