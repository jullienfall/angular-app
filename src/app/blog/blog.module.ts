import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogService } from './blog.service';

import { BlogComponent} from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ BlogService ],
  declarations: [ BlogComponent ]
})
export class BlogModule { }
