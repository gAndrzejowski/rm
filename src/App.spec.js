import React from 'react';
import shallowRenderer from 'react-test-renderer/shallow';
import App from './App';

jest.mock('react-dom');

describe('App component', () => {
  const renderer = new shallowRenderer();
  it('renders correctly', () => {
    renderer.render(<App />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
