import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import MovieReducer from './reducer_movies.js';

const rootReducer = combineReducers({
  movies: MovieReducer,
  form: formReducer,
});

export default rootReducer;
