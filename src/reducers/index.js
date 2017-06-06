import { combineReducers } from 'redux';
import MovieReducer from './reducer_movies.js';

const rootReducer = combineReducers({
  movies: MovieReducer
});

export default rootReducer;
