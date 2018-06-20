import * as calls from './async';
import { swagger, single } from '../util/calls';
import { getMovies, setCurrentMovie, sortMovies } from './creators';
import fetchMock from '../__mocks__/fetchMock';

describe('async calls action creators', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
    global.fetch.mockImplementation(fetchMock);
  });
  it('search movies calls swagger with search and searchBy params, and returns result of getMovies', async () => {
    expect(await calls.searchMovies('a', 'n')).toEqual(getMovies((await swagger({ search: 'a', searchBy: 'n' })).data));
  });
  it('search and sort calls swagger with sortBy, searchBy and search params, and returns result of sortMovies', async () => {
    expect(await calls.searchAndSort('a', 'b', 'c')).toEqual(sortMovies('a', (await swagger({ sortBy: 'a', search: 'b', searchBy: 'c' })).data));
  });
  it('get by genre calls swagger with searchBy=genre and provided param as query, returns result of getMovies', async () => {
    expect(await calls.getByGenre('a')).toEqual(getMovies((await swagger({ search: 'a', searchBy: 'genres' })).data));
  });
  it('getById calls swagger\'s single movie API with id provided, returns the result of setCurrentMovie', async () => {
    expect(await calls.getById(1000)).toEqual(setCurrentMovie((await single(1000))));
  });
});
