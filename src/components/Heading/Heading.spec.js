import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import mockMovies from '../../__mocks__/mockMovies';
import {Heading} from "./Heading";

describe('Heading component', () => {
    const renderer = new ShallowRenderer();
    it('renders correctly when there is no movie chosen', () => {
        renderer.render(<Heading search={jest.fn()} />);
        const tree = renderer.getRenderOutput();
        expect(tree).toMatchSnapshot();
    })
    it('renders correctly when there is a movie chosen', () => {
        renderer.render(<Heading search={jest.fn()} selectedMovie={mockMovies[1]} />);
        const tree = renderer.getRenderOutput();
        expect(tree).toMatchSnapshot();
    })
    it('calls backToSearch after a button is clicked', () => {
        const wrapper = shallow(<div><Heading search={jest.fn()} selectedMovie={mockMovies[1]} backToSearch={jest.fn()}/></div>);
        const heading = wrapper.find('Heading').dive();

        heading.find('button').simulate('click');
        expect(wrapper.find('Heading').prop('backToSearch').mock.calls.length).toBe(1);
    })
});
