import actions from '../actions/names';

export const initialState = {
    selected: null,
    search: '',
    by: 'title'
};

const headingReducer = (state = initialState, action = {}) => {
    const {SET_SEARCH_TXT: txt, SET_SEARCH_CRITERION: criterion, SET_CURRENT_MOVIE: movie, HYDRATE_STORE: hydrate } = actions;
    switch(action.type) {
        case movie:
            return {
                ...state,
                selected: action.movie
            };
        case txt:
            return {
                ...state,
                search: action.txt
            };
        case criterion:
            return {
                ...state,
                by: action.criterion
            };
        case hydrate:
            return action.retrievedStore.heading || state;
        default:
            return state
    }
};

export default headingReducer;
