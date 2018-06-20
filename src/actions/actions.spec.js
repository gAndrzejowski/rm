import {
  GET_MOVIES,
  SORT_MOVIES,
  SET_SEARCH_CRITERION,
  SET_CURRENT_MOVIE,
  SET_SEARCH_TXT,
  HYDRATE_STORE,
} from './names';
import {
  getMovies,
  sortMovies,
  setCurrentMovie,
  setSearchCriterion,
  setSearchTxt,
  hydrateStore,
} from './creators';
import mockMovies from '../__mocks__/mockMovies';

describe('action creator functions', () => {
  it('create get movies action', () => {
    const action = getMovies(mockMovies);
    expect(action).toEqual({
      type: GET_MOVIES,
      payload: mockMovies,
    });
  });
  it('create sort movies action', () => {
    const action = sortMovies('something random', mockMovies.reverse());
    expect(action).toEqual({
      type: SORT_MOVIES,
      by: 'something random',
      results: mockMovies.reverse(),
    });
  });
  it('create set search criterion action', () => {
    const action = setSearchCriterion('some criterion');
    expect(action).toEqual({
      type: SET_SEARCH_CRITERION,
      criterion: 'some criterion',
    });
  });
  it('creates set current movie action', () => {
    const action = setCurrentMovie(mockMovies[3]);
    expect(action).toEqual({
      type: SET_CURRENT_MOVIE,
      movie: mockMovies[3],
    });
  });
  it('creates set search txt action', () => {
    const action = setSearchTxt('what should I watch tonight?');
    expect(action).toEqual({
      type: SET_SEARCH_TXT,
      txt: 'what should I watch tonight?',
    });
  });
  it('hydrate store if no localStorage is present', () => {
    const action = hydrateStore();
    expect(action).toEqual({
      type: HYDRATE_STORE,
      retrievedStore: {},
    });
  });
  it('hydrate store with localStorage present', () => {
    window.localStorage = {
      getItem: () => JSON.stringify({ some: 'value' }),
    };
    const action = hydrateStore();
    expect(action).toEqual({
      type: HYDRATE_STORE,
      retrievedStore: { some: 'value' },
    });
    window.localStorage.getItem = () => null;
    const noDataAction = hydrateStore();
    expect(noDataAction).toEqual({
      type: HYDRATE_STORE,
      retrievedStore: {},
    });
    delete window.localStorage;
  });
});
