import actions from './names';
import mockMovies from '../__mocks__/mockMovies';
import creators from './creators';

describe('action creator functions', () => {
   it('create get movies action', () => {
       const action = creators.get_movies(mockMovies);
       expect(action).toEqual({
           type: actions.GET_MOVIES,
           payload: mockMovies
       });
   });
   it('create sort movies action', () => {
      const action = creators.sort_movies('something random', mockMovies.reverse());
      expect(action).toEqual({
          type: actions.SORT_MOVIES,
          by: 'something random',
          results: mockMovies.reverse()
      });
   });
    it('create set search criterion action', () => {
        const action = creators.set_search_criterion('some criterion');
        expect(action).toEqual({
            type:actions.SET_SEARCH_CRITERION,
            criterion: 'some criterion'
        });
    });
    it('creates set current movie action', () => {
        const action = creators.set_current_movie(mockMovies[3]);
        expect(action).toEqual({
            type: actions.SET_CURRENT_MOVIE,
            movie: mockMovies[3]
        });
    });
    it('creates set search txt action', () => {
        const action = creators.set_search_txt('what should I watch tonight?');
        expect(action).toEqual({
            type: actions.SET_SEARCH_TXT,
            txt: 'what should I watch tonight?'
        });
    });
    it('hydrate store if no localStorage is present', ()=>{
        const action = creators.hydrate_store();
        expect(action).toEqual({
            type: actions.HYDRATE_STORE,
            retrievedStore: {}
        });
    });
    it('hydrate store with localStorage present', () => {
        window.localStorage = {
            getItem: ()=>JSON.stringify({some: 'value'})
        };
        const action = creators.hydrate_store();
        expect(action).toEqual({
            type: actions.HYDRATE_STORE,
            retrievedStore: {some: 'value'}
        });
        window.localStorage.getItem = ()=>null;
        const noDataAction = creators.hydrate_store();
        expect(noDataAction).toEqual({
            type: actions.HYDRATE_STORE,
            retrievedStore: {}
        });
        delete window.localStorage
    })
});