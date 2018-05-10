import React from 'react';
import renderer from 'react-test-renderer';
import Footing from './Footing';

describe('Footing component', () => {
   it('renders correctly', () => {
       const tree = renderer.create(<Footing />).toJSON();
       expect(tree).toMatchSnapshot();
   })
});