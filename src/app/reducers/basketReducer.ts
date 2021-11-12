import { Action } from '@ngrx/store';

export function BasketReducer(
  state: string = 'Basket is not filed in with sweets',
  action: Action
) {
  console.log(action.type, state);

  switch (action.type) {
    case 'FULL':
      return (state = 'Basket is full');
    case 'EMPTY':
      return (state = 'Basket isempty');
    default:
      return state;
  }
}

import { createReducer, on } from '@ngrx/store';

import { fullBasket, emptyBasket } from './basketActions';

export const initialState = 'Basket is not filed in with sweets';

const _basketReducer = createReducer(
  initialState,
  on(fullBasket, (state) => 'Basket is full'),
  on(emptyBasket, (state) => 'Basket is empty')
);

export function basketReducer(state, action) {
  return _basketReducer(state, action);
}
