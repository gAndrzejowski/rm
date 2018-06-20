import { swagger, single } from '../util/calls';
import { getMovies, setCurrentMovie, sortMovies } from './creators';

export const searchMovies = async (query, searchBy) => {
  const results = await swagger({
    search: query,
    searchBy,
  });
  return getMovies(results.data);
};

export const searchAndSort = async (sortBy, search, searchBy) => {
  const results = await swagger({
    sortBy,
    search,
    searchBy,
  });
  return sortMovies(sortBy, results.data);
};

export const getByGenre = async (genre) => {
  const results = await swagger({
    search: genre,
    searchBy: 'genres',
  });
  return getMovies(results.data);
};

export const getById = async (id) => {
  const results = await single(id);
  return setCurrentMovie(results);
};

export default searchMovies;
