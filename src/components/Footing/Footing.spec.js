import React from 'react';
import renderer from 'react-test-renderer';
import Footing from './Footing';
import {shallow} from 'enzyme'

describe('Footing component', () => {
   it('renders correctly', () => {
       const tree = renderer.create(<Footing />).toJSON();
       expect(tree).toMatchSnapshot();
   })
});