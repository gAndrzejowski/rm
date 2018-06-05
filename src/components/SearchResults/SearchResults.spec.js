import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {SearchResults, mapStateToProps, mapDispatchToProps} from './SearchResults';
import {set_current_movie} from "../../actions/creators";
import {searchMovies} from "../../actions/async";

describe('Search Results component', () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<SearchResults
            search={jest.fn()}
            clearSelection={jest.fn()}
            match={{params: {search:"a", by:"b"}}}
        />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
});
describe('Search results store connection functions', () => {
    it('has a mapStateToProps function that maps state.heading to appropriate props', () => {
        const mockStore = {
            heading:{
                search: 'X',
                by: 'Y'
            }
        };
        expect(mapStateToProps(mockStore)).toEqual({
            currentSearch: 'X',
            currentCrit: 'Y'
        });
    });
    it('has a mapDispatchToProps function that creates two functions', () => {
        const fakeDispatch = jest.fn();
        const result = mapDispatchToProps(fakeDispatch)
        expect(result).toEqual({
            search: expect.any(Function),
            clearSelection: expect.any(Function)
        });
    })
});