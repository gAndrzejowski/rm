import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {MovieHeader, mapStateToProps, mapDispatchToProps} from "./MovieHeader.jsx";
import {SET_CURRENT_MOVIE} from '../../actions/names';

describe('MovieHeader component', () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<MovieHeader match={{params:{id:3}}} selectedMovie={{}} backToSearch={jest.fn()} getMovie={jest.fn()} />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
});

describe('store connection functions', () => {
   it('mapStateToProps gets selected movie data from state', () => {
       const fakeState = {
           heading: {
               selected: 'a movie'
           }
       };
       expect(mapStateToProps(fakeState)).toEqual({
           selectedMovie: 'a movie'
       });
   });
    it('mapDispatchToProps creates a backToSearch function that dispatches a SET_CURRENT_MOVIE action with null param', () => {
        const fakeDispatch = jest.fn();
        const props = mapDispatchToProps(fakeDispatch);
        expect(props.backToSearch).toBeInstanceOf(Function);
        props.backToSearch();
        expect(fakeDispatch).toHaveBeenCalledTimes(1);
        expect(fakeDispatch.mock.calls[0][0]).toEqual({
            type: SET_CURRENT_MOVIE,
            movie: null
        })
    })
});