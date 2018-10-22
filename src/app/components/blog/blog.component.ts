import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Data } from './data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title: string = 'Blog';
  private subscription;
  data: Data[];
  showBlog: boolean = false;
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.subscription = this.blogService
      .getData()
      .subscribe(data => (this.data = data))
      .add(() => (this.showBlog = true));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
