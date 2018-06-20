import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchHeader from './SearchHeader';

describe('Search Header', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchHeader />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
