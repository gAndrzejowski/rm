import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary';

describe('Error boundary', () => {
  it('renders correctly', () => {
    const test = renderer.create(<ErrorBoundary><h1>:)</h1></ErrorBoundary>);
    expect(test.toJSON()).toMatchSnapshot();

    test.getInstance().componentDidCatch('a', 'b');
    expect(test.toJSON()).toMatchSnapshot();
  });
});
