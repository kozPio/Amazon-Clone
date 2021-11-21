import { createReducer, on } from '@ngrx/store';

import {
  addItemToBasket,
  removeOneItemFromBasket,
  removeItemFromBasket,
} from './basketActions';

export const initialState: string[] = [];

const _basketReducer = createReducer(
  initialState,
  on(removeItemFromBasket, (state, action) => {
    state = state.filter((id) => id !== action.id);
    return [...state];
  }),
  on(addItemToBasket, (state, action) => {
    return [...state, action.id];
  }),
  on(removeOneItemFromBasket, (state, action) => {
    let index = state.indexOf(action.id);
    let temp = [...state];
    temp.splice(index, 1);

    return [...temp];
  })
);

export function basketReducer(state, action) {
  return _basketReducer(state, action);
}
