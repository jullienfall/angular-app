import { User } from '../user';

import { UserActions, UserActionTypes } from './user.action';

export interface UserState {
  maskPassword: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskPassword: true,
  currentUser: null
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.MaskPassword:
      return {
        ...state,
        maskPassword: action.payload
      };

    default:
      return state;
  }
}
