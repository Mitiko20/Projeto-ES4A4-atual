import { createAction, props } from "@ngrx/store";

import { Project } from "@core/interfaces/project";

export const setCurrentProject = createAction(
  '[Página do Projeto] Definir projeto atual',
  props<{ projectId: string }>()
)

export const loadProjects = createAction('[Página do Projeto] Carregar');

export const createProject = createAction(
  '[Página do Projeto] Criar Projeto',
  props<{ project: Project }>()
);

export const updateProject = createAction(
  '[Página do Projeto] Atualizar Projeto',
  props<{ project: Project }>()
);

export const deleteProject = createAction(
  '[Página do Projeto] Excluir Projeto',
  props<{ projectId: string }>()
);

export const removePeople = createAction(
  '[Página do Projeto] Remover Pessoas',
  props<{ userId: string }>()
);
