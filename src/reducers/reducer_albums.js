import { FETCH_ALBUMS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload;
    default:
      return state;
  }
}
