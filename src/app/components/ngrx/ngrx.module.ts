import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// NgRx
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

// components
import { NgrxComponent } from './ngrx.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ post: postReducer, message: simpleReducer }),
    RouterModule.forChild([{ path: 'ngrx', component: NgrxComponent }])
  ],
  declarations: [NgrxComponent, PostComponent]
})
export class NgrxModule {}
