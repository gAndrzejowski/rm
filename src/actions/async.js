import { swagger, single } from '../util/calls';
import { getMovies, setCurrentMovie, sortMovies } from './creators';

// @flow

export const searchMovies = async (query :string, searchBy :string) => {
  const results = await swagger({
    search: query,
    searchBy,
  });
  return getMovies(results.data);
};

export const searchAndSort = async (sortBy :string, search :string, searchBy :string) => {
  const results = await swagger({
    sortBy,
    search,
    searchBy,
  });
  return sortMovies(sortBy, results.data);
};

export const getByGenre = async (genre :string) => {
  const results = await swagger({
    search: genre,
    searchBy: 'genres',
  });
  return getMovies(results.data);
};

export const getById = async (id :number) => {
  const results = await single(id);
  return setCurrentMovie(results);
};

export default searchMovies;
