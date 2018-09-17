import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service'; 
import { Data } from './data'; 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  data: Data[];
  firstData: Data[];
  constructor(private blogService: BlogService) {}

  ngOnInit():void {
    this.blogService.getData().subscribe(res => {
      this.data = res;
      this.firstData = this.data.slice(0, 5);
    });
  }


}
