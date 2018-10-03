import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';
import { FormsModule } from '@angular/forms';

import { NgrxComponent } from './ngrx.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ post: postReducer, message: simpleReducer })
  ],
  declarations: [NgrxComponent, PostComponent]
})
export class NgrxModule {}
