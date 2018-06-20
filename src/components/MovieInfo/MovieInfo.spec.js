import React from 'react';
import renderer from 'react-test-renderer';
import mockMovies from '../../__mocks__/mockMovies';
import MovieInfo from './MovieInfo';

describe('MovieInfo component', () => {
  it('renders correctly', () => {
    const { genres, year, title } = mockMovies[0];
    const tree = renderer.create(<MovieInfo {...{ genres, year, title }} />);
    expect(tree).toMatchSnapshot();
  });
});
