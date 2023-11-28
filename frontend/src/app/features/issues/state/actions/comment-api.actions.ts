import { createAction, props } from '@ngrx/store';

import { Comment } from '@core/interfaces/comment';


export const loadCommentsSuccess = createAction(
  'Carregou os comentários com sucesso!',
  props<{ comments: Comment[] }>()
);
export const loadCommentsFailure = createAction(
  'Falha ao carregar comentários!',
  props<{ error: string }>()
);

export const createCommentSuccess = createAction(
  'Criou comentário com sucesso!',
  props<{ comment: Comment }>()
);
export const createCommentFailure = createAction(
  'Falha ao criar comentário',
  props<{ error: string }>()
);

export const updateCommentSuccess = createAction(
  'Atualização do comentário com sucesso!',
  props<{ comment: Comment }>()
);
export const updateCommentFailure = createAction(
  'Falha na atualização do comentário',
  props<{ error: string }>()
);

export const deleteCommentSuccess = createAction(
  'Comentário excluído com sucesso!',
  props<{ commentId: string }>()
);
export const deleteCommentFailure = createAction(
  'Falha ao excluir comentário',
  props<{ error: string }>()
);
