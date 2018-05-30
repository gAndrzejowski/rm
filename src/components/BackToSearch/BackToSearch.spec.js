import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import BackToSearch from './BackToSearch';

describe('back to search component', () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<BackToSearch/>);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});