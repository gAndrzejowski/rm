import { combineReducers } from 'redux';
import heading from './heading';
import movies from './movies';

export default combineReducers({
  heading,
  movies,
});
