import { User } from '@core/interfaces/user';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Usuário] Carregar usuários');

export const loadUsersSuccess = createAction(
  '[Usuário] Carregar usuários com sucesso',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Usuário] Falha ao carregar usuários',
  props<{ error: string }>()
);

export const loginUser = createAction(
  '[Usuário] Login de Usuário',
  props<{ email: string; password: string }>()
);

export const loginUserSuccess = createAction(
  '[Usuário] Login do Usuário com Sucesso',
);

export const loginUserFailure = createAction(
  '[Usuário] Falha no Login do Usuário',
  props<{ error: string }>()
);