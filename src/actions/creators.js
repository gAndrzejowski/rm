import {
  GET_MOVIES,
  SORT_MOVIES,
  SET_SEARCH_CRITERION,
  SET_CURRENT_MOVIE,
  SET_SEARCH_TXT,
  HYDRATE_STORE,
} from './names';

export const getMovies = payload => ({ type: GET_MOVIES, payload });
export const sortMovies = (by, results) => ({ type: SORT_MOVIES, by, results });
export const setSearchCriterion = criterion => ({ type: SET_SEARCH_CRITERION, criterion });
export const setCurrentMovie = movie => ({ type: SET_CURRENT_MOVIE, movie });
export const setSearchTxt = txt => ({ type: SET_SEARCH_TXT, txt });
export const hydrateStore = () => {
  const retrieval = (window && window.localStorage) ?
    JSON.parse(window.localStorage.getItem('netflixRouletteStore')) :
    null;
  return {
    type: HYDRATE_STORE,
    retrievedStore: retrieval || {},
  };
};
export const applyPreloaded = (store = {}) => ({ type: HYDRATE_STORE, retrievedStore: store });

export default {
  getMovies,
  sortMovies,
  setCurrentMovie,
  setSearchCriterion,
  setSearchTxt,
  hydrateStore,
  applyPreloaded,
};
