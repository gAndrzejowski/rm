// @flow
import {
  GET_MOVIES,
  SORT_MOVIES,
  HYDRATE_STORE,
} from '../actions/names';
import type { Action, Store } from '../flowTypes';

export const initialState = {
  results: [],
  sort: '',
};

const moviesReducer = (state :Store.movies = initialState, action :Action = {}) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        results: action.payload,
        sort: '',
      };
    case SORT_MOVIES:
      return {
        sort: action.by,
        results: action.results,
      };
    case HYDRATE_STORE:
      return action.retrievedStore.movies || state;
    default:
      return state;
  }
};

export default moviesReducer;
