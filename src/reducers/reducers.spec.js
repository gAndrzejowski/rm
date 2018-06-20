import reducer from './rootReducer';
import headingReducer, { initialState as initialHeading } from './heading';
import moviesReducer, { initialState as initialMovies } from './movies';
import {
  SET_CURRENT_MOVIE,
  SET_SEARCH_TXT,
  SET_SEARCH_CRITERION,
  HYDRATE_STORE,
  GET_MOVIES,
  SORT_MOVIES,
} from '../actions/names';

describe('root reducer', () => {
  it('initializes state', () => {
    const initialState = reducer();
    expect(initialState).toEqual({
      heading: initialHeading,
      movies: initialMovies,
    });
  });
});

describe('heading reducer', () => {
  it('changes selectedMovie if an action of SET_CURRENT_MOVIE type is called', () => {
    const nextState = headingReducer(initialHeading, {
      type: SET_CURRENT_MOVIE,
      movie: 'some movie',
    });
    expect(nextState).toEqual({
      ...initialHeading,
      selected: 'some movie',
    });
  });
  it('changes search string if an action of SET_SEARCH_TXT type is called', () => {
    const nextState = headingReducer(initialHeading, {
      type: SET_SEARCH_TXT,
      txt: 'Titanic',
    });
    expect(nextState).toEqual({
      ...initialHeading,
      search: 'Titanic',
    });
  });
  it('changes search criterion if an action of SET_SEARCH_CRITERION type is called', () => {
    const nextState = headingReducer(initialHeading, {
      type: SET_SEARCH_CRITERION,
      criterion: 'Director\'s age',
    });
    expect(nextState).toEqual({
      ...initialHeading,
      by: 'Director\'s age',
    });
  });
  it('changes the store to the value retrieved by HYDRATE_STORE if there is any otherwise leave the store alone', () => {
    let nextState = headingReducer(initialMovies, {
      type: HYDRATE_STORE,
      retrievedStore: {},
    });
    const fakeAction = {
      type: HYDRATE_STORE,
      retrievedStore: {
        heading: {
          search: ':)',
          by: 'smiley',
          selected: 'dunno, some movie',
        },
      },
    };
    expect(nextState).toEqual(initialMovies);
    nextState = headingReducer(initialMovies, fakeAction);
    expect(nextState).toEqual(fakeAction.retrievedStore.heading);
  });
});

describe('movies reducer', () => {
  it('sets movies list if an action of GET_MOVIES type is called', () => {
    const nextState = moviesReducer(initialMovies, {
      type: GET_MOVIES,
      payload: [1, 2, 3, 4, 5],
    });
    expect(nextState).toEqual({
      ...initialMovies,
      results: [1, 2, 3, 4, 5],
    });
  });
  it('sets sorting to value provided in SORT_MOVIES action, and also sets new movies', () => {
    const nextState = moviesReducer(initialMovies, {
      type: SORT_MOVIES,
      by: 'highest rating',
      results: [5, 4, 3, 2, 1],
    });
    expect(nextState).toEqual({
      ...initialMovies,
      sort: 'highest rating',
      results: [5, 4, 3, 2, 1],
    });
  });
  it('changes the store to the value retrieved by HYDRATE_STORE if there is any otherwise leave the store alone', () => {
    let nextState = moviesReducer(initialMovies, {
      type: HYDRATE_STORE,
      retrievedStore: {},
    });
    const fakeAction = {
      type: HYDRATE_STORE,
      retrievedStore: {
        movies: {
          results: [1, 2],
          sort: '***',
        },
      },
    };
    expect(nextState).toEqual(initialMovies);
    nextState = moviesReducer(initialMovies, fakeAction);
    expect(nextState).toEqual(fakeAction.retrievedStore.movies);
  });
});
