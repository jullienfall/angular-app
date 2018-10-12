import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MaskPassword = '[User] Mask Password'
}

export class MaskPassword implements Action {
  readonly type = UserActionTypes.MaskPassword;

  constructor(public payload: boolean) {}
}

export type UserActions = MaskPassword;
