import * as PostActions from './../action/post.action';
import { Post } from './../models/post';

export type Action = PostActions.All;

const defaultState: Post = {
  text: 'Default post',
  likes: 0
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {
  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostActions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });

    case PostActions.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });

    case PostActions.RESET:
      return defaultState;

    default:
      return state;
  }
}
