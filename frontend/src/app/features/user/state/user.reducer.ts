import { User } from '@core/interfaces/user';
import { createReducer, on } from '@ngrx/store';

import * as fromUserActions from './actions/user.actions';
import { users } from '../../../../../../backend/src/database/seeders/users/users';

export const userFeatureKey = 'user';

export interface UserState {
  currentUserId: string | null;
  users: User[];
  error: string;
}

export const initialState: UserState = {
  currentUserId: null,
  users: [],
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(fromUserActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users,
    };
  }),
  on(fromUserActions.loadUsersFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(fromUserActions.loginUser, (state, { email, password }) => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      return {
        ...state,
        currentUserId: matchedUser._id,
        error: '', // Limpa qualquer erro de login anterior
      };
    } else {
      return {
        ...state,
        currentUserId: null,
        error: 'Usuário ou senha incorretos.', // Define uma mensagem de erro
      };
    }
  })
);
