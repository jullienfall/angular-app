import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './../models/post';
import * as PostActions from './../action/post.action';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post: Observable<Post>;
  text: string;

  constructor(public store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText() {
    if (this.text != '' && this.text != undefined)
      this.store.dispatch(new PostActions.EditText(this.text));
    this.text = '';
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }
}
