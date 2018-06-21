// @flow
import {
  GET_MOVIES,
  SORT_MOVIES,
  SET_SEARCH_CRITERION,
  SET_CURRENT_MOVIE,
  SET_SEARCH_TXT,
  HYDRATE_STORE,
} from './names';
import type { Action, MovieData, Store } from '../flowTypes';

export const getMovies = (payload :Array<MovieData>) :Action => ({ type: GET_MOVIES, payload });
export const sortMovies = (by: string, results: Array<MovieData>) :Action => (
  { type: SORT_MOVIES, by, results }
);
export const setSearchCriterion = (criterion :string) :Action => (
  { type: SET_SEARCH_CRITERION, criterion }
);
export const setCurrentMovie = (movie :MovieData) :Action => ({ type: SET_CURRENT_MOVIE, movie });
export const setSearchTxt = (txt :string) :Action => ({ type: SET_SEARCH_TXT, txt });
export const hydrateStore = () :Action => {
  const retrieval = (window && window.localStorage) ?
    JSON.parse(window.localStorage.getItem('netflixRouletteStore')) :
    null;
  return {
    type: HYDRATE_STORE,
    retrievedStore: retrieval || {},
  };
};
export const applyPreloaded = (store :Store = {}) :Action => (
  { type: HYDRATE_STORE, retrievedStore: store }
);
