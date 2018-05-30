import swagger, {single} from '../util/calls';
import {get_movies, set_current_movie, sort_movies} from "./creators";

export const searchMovies = async (query, searchBy) => {
    const results = await swagger({
        search: query,
        searchBy
    });
    return get_movies(results.data);
};

export const searchAndSort = async (sortBy, search, searchBy) => {
    const results = await swagger({
        sortBy,
        search,
        searchBy
    });
    console.log(results.data.length);
    return sort_movies(sortBy, results.data);
};

export const getByGenre = async (genre) => {
    const results = await swagger({
        search: genre,
        searchBy: "genres"
    });
    return get_movies(results.data);
};

export const getById = async id => {
    const results = await single(id);
    return set_current_movie(results);
};

export default searchMovies;