import { createAction, props } from '@ngrx/store';

export const fullBasket = createAction(
  'Add to basket',
  props<{ id: string }>()
);
export const emptyBasket = createAction('Empty basket');
