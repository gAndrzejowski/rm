import {
  GET_MOVIES,
  SORT_MOVIES,
  HYDRATE_STORE,
} from '../actions/names';

export const initialState = {
  results: [],
  sort: '',
};

const moviesReducer = (state = initialState, action = {}) => {
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
