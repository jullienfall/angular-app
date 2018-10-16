import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// pagination
import { NgxPaginationModule } from 'ngx-pagination';

// service
import { BlogService } from './blog.service';

//component
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxPaginationModule],
  providers: [BlogService],
  declarations: [BlogComponent]
})
export class BlogModule {}
