import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import mockMovies from '../../__mocks__/mockMovies';
import Results from "./Results";

describe('Results component', () => {
    it('renders correctly when there are movies to display', () => {
        const tree = renderer.create(<Results chooseMovie={jest.fn()} results={mockMovies} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly when there are no movies to display', () => {
        const tree = renderer.create(<Results chooseMovie={jest.fn()} results={[]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('calls chooseMovie prop with the right id after calling one of the child components chooseMovie props', () => {
        const wrapper = shallow(<div><Results chooseMovie={jest.fn()} results={mockMovies} /></div>);
        const results = wrapper.find('Results').dive();

        results.find('Movie').at(3).prop('chooseMovie')();
        results.find('Movie').at(6).prop('chooseMovie')();

        expect(wrapper.find('Results').prop('chooseMovie').mock.calls[0][0]).toBe(3);
        expect(wrapper.find('Results').prop('chooseMovie').mock.calls[1][0]).toBe(6);
    })
});