import actions from './names';

const {
    GET_MOVIES,
    SORT_MOVIES,
    SET_SEARCH_CRITERION,
    SET_CURRENT_MOVIE,
    SET_SEARCH_TXT
} = actions;

export const get_movies = (payload) => ({type: GET_MOVIES, payload});
export const sort_movies = (by, results) => ({type: SORT_MOVIES, by, results});
export const set_search_criterion = (criterion) => ({type: SET_SEARCH_CRITERION, criterion});
export const set_current_movie = (movie) => ({type: SET_CURRENT_MOVIE, movie});
export const set_search_txt = (txt)=> ({type: SET_SEARCH_TXT, txt});

export default {
    get_movies,
    sort_movies,
    set_current_movie,
    set_search_criterion,
    set_search_txt
};