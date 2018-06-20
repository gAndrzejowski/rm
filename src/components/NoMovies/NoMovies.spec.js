import React from 'react';
import renderer from 'react-test-renderer';
import NoMovies from './NoMovies';

describe('NoMovies component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoMovies />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
