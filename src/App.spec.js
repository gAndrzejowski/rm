import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { App } from './App';

jest.mock('react-dom');

describe('App component', () => {
  const renderer = new ShallowRenderer();
  it('renders correctly', () => {
    renderer.render(<App />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
