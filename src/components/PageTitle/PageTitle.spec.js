import React from 'react';
import renderer from 'react-test-renderer';
import PageTitle from './PageTitle';

describe('PageTitle component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<PageTitle/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});