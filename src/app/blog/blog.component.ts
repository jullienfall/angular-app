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
  constructor(private blogService: BlogService) {}

  ngOnInit():void {
    this.blogService.getData().subscribe(res => this.data = res);
  }


}
