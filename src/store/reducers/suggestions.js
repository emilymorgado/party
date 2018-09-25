import { SAVE_SUGGESTION } from 'store/actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case SAVE_SUGGESTION:
      return [...state, action.payload];
    default:
      return state;
  }
}