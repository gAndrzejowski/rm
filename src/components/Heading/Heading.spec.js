import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Heading from "./Heading";

describe('Heading component', () => {
    const renderer = new ShallowRenderer();
    it('renders correctly when there is no movie chosen', () => {
        renderer.render(<Heading />);
        const tree = renderer.getRenderOutput();
        expect(tree).toMatchSnapshot();
    });
});

