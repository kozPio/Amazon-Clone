// import { Action } from '@ngrx/store';

// export function BasketReducer(
//   state: string = 'Basket is not filed in with sweets',
//   action: Action
// ) {
//   console.log(action.type, state);

//   switch (action.type) {
//     case 'FULL':
//       return (state = 'Basket is full');
//     case 'EMPTY':
//       return (state = 'Basket isempty');
//     default:
//       return state;
//   }
// }

import { createReducer, on } from '@ngrx/store';

import { fullBasket, emptyBasket } from './basketActions';

export const initialState: string[] = [];

const _basketReducer = createReducer(
  initialState,
  on(fullBasket, (state, action) => {
    return [...state, action.id];
  }),
  on(emptyBasket, (state, action) => {
    const index = state.indexOf(action.id);
    if (index > -1) {
      state.splice(index, 1);
    }

    return [...state];
  })
);

export function basketReducer(state, action) {
  return _basketReducer(state, action);
}
