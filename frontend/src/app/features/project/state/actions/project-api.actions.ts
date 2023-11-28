import { createAction, props } from "@ngrx/store";

import { Project } from "@core/interfaces/project";

export const loadProjectsSuccess = createAction(
  '[API do projeto] Carregamento bem-sucedido',
  props<{ projects: Project[] }>()
)
export const loadProjectsFailure = createAction(
  '[API do projeto] Falha no carregamento',
  props<{ error: string }>()
);

export const createProjectSuccess = createAction(
  '[API do projeto] Crie o sucesso do projeto',
  props<{ project: Project }>()
)
export const createProjectFailure = createAction(
  '[API do projeto] Falha na criação do projeto',
  props<{ error: string }>()
);


export const updateProjectSuccess = createAction(
  '[API do projeto] Atualizar o sucesso do projeto',
  props<{ project: Project }>()
)
export const updateProjectFailure = createAction(
  '[API do projeto] Falha na atualização do projeto',
  props<{ error: string }>()
);

export const deleteProjectSuccess = createAction(
  '[API do projeto] Exclusão do projeto com sucesso',
  props<{ projectId: string }>()
)
export const deleteProjectFailure = createAction(
  '[API do projeto] Falha na exclusão do projeto',
  props<{ error: string }>()
);
