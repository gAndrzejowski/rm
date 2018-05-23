import actions from '../actions/names';

export const initialState = {
  results: [],
  sort: ''
};

const moviesReducer = (state = initialState, action = {}) => {
  const {GET_MOVIES: get, SORT_MOVIES: sort, HYDRATE_STORE: hydrate} = actions;
  switch(action.type) {
      case get:
          return {
              ...state,
              results: action.payload
          };
      case sort:
          return {
              sort: action.by,
              results: action.results
          };
      case hydrate:
          return action.retrievedStore.movies || state
      default:
          return state;
  }
};

export default moviesReducer;
