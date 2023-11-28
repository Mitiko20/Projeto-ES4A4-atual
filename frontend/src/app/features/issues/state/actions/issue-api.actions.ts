import { createAction, props } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";


export const loadIssuesSuccess = createAction(
  '[API] Carregamento bem-sucedido',
  props<{ issues: Issue[] }>()
);
export const loadIssuesFailure = createAction(
  '[API] Carregamento Falhou',
  props<{ error: string }>()
);

export const createIssueSuccess = createAction(
  '[API] Criar problema de sucesso',
  props<{ issue: Issue }>()
);
export const createIssueFailure = createAction(
  '[API] Falha na criação do problema',
  props<{ error: string }>()
);

export const updateIssueSuccess = createAction(
  '[API] Problema de atualização bem-sucedido',
  props<{ issue: Issue }>()
);
export const updateIssueFailure = createAction(
  '[API] Falha no problema de atualização',
  props<{ error: string }>()
);

export const deleteIssueSuccess = createAction(
  '[API] Sucesso na exclusão do problema',
  props<{ issueId: string }>()
);
export const deleteIssueFailure = createAction(
  '[API] Falha ao excluir problema',
  props<{ error: string }>()
);
