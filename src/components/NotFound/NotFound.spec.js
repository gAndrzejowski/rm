import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NotFound from './NotFound';

describe('404 page component', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<NotFound />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
