import actions from '../actions/names';

const initialState = {
  results: [],
  sort: ''
};

const moviesReducer = (state = initialState, action) => {
  const {GET_MOVIES: get, SORT_MOVIES: sort} = actions;
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
      default:
          return state;
  }
};

export default moviesReducer;
