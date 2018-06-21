import {
  GET_MOVIES,
  SORT_MOVIES,
  SET_SEARCH_CRITERION,
  SET_CURRENT_MOVIE,
  SET_SEARCH_TXT,
  HYDRATE_STORE,
} from './names';

// @flow
type Action = {
  type: string,
}
type Movie = {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count?: number,
  release_date: string,
  poster_path: string,
  overview: string,
  genres: Array<string>,
  budget?: number,
  revenue?: number,
  runtime?: number
}

export const getMovies = (payload :Array<Movie>) :Action => ({ type: GET_MOVIES, payload });
export const sortMovies = (by: string, results: Array<Movie>) :Action => (
  { type: SORT_MOVIES, by, results }
);
export const setSearchCriterion = (criterion :string) :Action => (
  { type: SET_SEARCH_CRITERION, criterion }
);
export const setCurrentMovie = (movie :Movie) :Action => ({ type: SET_CURRENT_MOVIE, movie });
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
export const applyPreloaded = (store :Object<any> = {}) :Action => (
  { type: HYDRATE_STORE, retrievedStore: store }
);
