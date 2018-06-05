import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Related from './Related';

describe('Search Results component', () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Related />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
});
