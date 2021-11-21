import { createAction, props } from '@ngrx/store';

export const addItemToBasket = createAction(
  'Add to basket',
  props<{ id: string }>()
);
export const removeItemFromBasket = createAction(
  'Remove an item  from basket',
  props<{ id: string }>()
);

export const removeOneItemFromBasket = createAction(
  'Remove one instance of item from basket',
  props<{ id: string }>()
);
