import { createAction, props } from '@ngrx/store';


export const setSearchTermFilter = createAction(
  '[Filtro] Definir termo de pesquisa',
  props<{ searchTerm: string }>()
);

export const toggleUser = createAction(
  '[Filtro] Alternar usuário',
  props<{ userId: string }>()
)

export const toggleOnlyMyIssues = createAction('[Filtro] Toogle apenas meus problemas');

export const toggleRecentlyUpdated = createAction('[Filtro] Toogle atualizado recentemente');

export const clearAllFilters = createAction('[Filtro] Limpar tudo');




