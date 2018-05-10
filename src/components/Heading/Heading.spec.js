import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import mockMovies from '../../__mocks__/mockMovies';
import Heading from "./Heading";

describe('Heading component', () => {
    it('renders correctly when there is no movie chosen', () => {
        const tree = renderer.create(<Heading search={jest.fn()} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('renders correctly when there is a movie chosen', () => {
        const tree = renderer.create(<Heading search={jest.fn()} selectedMovie={mockMovies[1]} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('calls backToSearch after a button is clicked', () => {
        const wrapper = shallow(<div><Heading search={jest.fn()} selectedMovie={mockMovies[1]} backToSearch={jest.fn()}/></div>);
        const heading = wrapper.find('Heading').dive();

        heading.find('button').simulate('click');
        expect(wrapper.find('Heading').prop('backToSearch').mock.calls.length).toBe(1);
    })
    it('calls search if search called from SearchBox child', () => {
        const wrapper = shallow(<div><Heading search={jest.fn()} selectedMovie={null} search={jest.fn()}/></div>);
        const heading = wrapper.find('Heading').dive();

        heading.find('SearchBox').prop('search')();
        expect(wrapper.find('Heading').prop('search').mock.calls.length).toBe(1);
    })
});
