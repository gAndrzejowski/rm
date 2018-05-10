import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './MoviePage';
import mockMovies from '../../__mocks__/mockMovies';

describe('MoviePage component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<MoviePage movie={mockMovies[0]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
