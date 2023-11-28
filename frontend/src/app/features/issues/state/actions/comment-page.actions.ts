import { createAction, props } from '@ngrx/store';

import { Comment } from '@core/interfaces/comment';

export const loadComments = createAction('[Comment] Load Comments');

export const loadCommentsByIssueId = createAction(
  'Carregando comentários',
  props<{ issueId: string }>()
);

export const createComment = createAction(
  'Criar Comentário',
  props<{ comment: Partial<Comment> }>()
);

export const updateComment = createAction(
  'Atualizar Comentário',
  props<{ comment: Comment }>()
);

export const deleteComment = createAction(
  'Deletar Comentário',
  props<{ commentId: string }>()
);
