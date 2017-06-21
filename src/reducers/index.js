import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import albums from './reducer_albums.js';

export default combineReducers({
  albums,
  form,
})
