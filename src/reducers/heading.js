import {
  SET_CURRENT_MOVIE,
  HYDRATE_STORE,
  SET_SEARCH_CRITERION,
  SET_SEARCH_TXT,
} from '../actions/names';

export const initialState = {
  selected: null,
  search: '',
  by: 'title',
};

const headingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        selected: action.movie,
      };
    case SET_SEARCH_TXT:
      return {
        ...state,
        search: action.txt,
      };
    case SET_SEARCH_CRITERION:
      return {
        ...state,
        by: action.criterion,
      };
    case HYDRATE_STORE:
      return action.retrievedStore.heading || state;
    default:
      return state;
  }
};

export default headingReducer;
