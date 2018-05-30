import React from 'react';
import NotFound404 from './NotFound404';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('404 page component', () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<NotFound404/>);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
});