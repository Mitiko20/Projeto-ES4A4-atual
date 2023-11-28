import { createAction, props } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";


export const loadIssues = createAction(
  'Página Carregada',
  props<{ projectId: string }>()
);

export const createIssue = createAction(
  'Página Criada!',
  props<{ issue: Issue }>()
);

export const updateIssue = createAction(
  'Problema de atualização da página',
  props<{ issue: Issue }>()
);

export const deleteIssue = createAction(
  'Deletado!',
  props<{ issueId: string }>()
);

export const deleteAllIssuesByProjectId = createAction(
  'Excluir todos os problemas por ProjectId',
  props<{ projectId: string }>()
);

export const setIssueEditing = createAction(
  '[Página do problema] Definir edição do problema',
  props<{ isEditing: boolean }>()
);
