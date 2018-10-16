import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Data } from './data';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  subscription;
  data: Observable<Data[]>;
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.data = this.blogService.getData().pipe(map(value => value));
  }
}
