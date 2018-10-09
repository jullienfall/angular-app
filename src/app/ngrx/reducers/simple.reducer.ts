import { Action } from '@ngrx/store';

const defaultState = 'Hello world';

export function simpleReducer(state: string = defaultState, action: Action) {
  switch (action.type) {
    case 'SPANISH':
      return (state = 'Hola Mundo');

    case 'FRENCH':
      return (state = 'Bonjour le monde');

    default:
      return state;
  }
}
