import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router';
import { shallow } from 'enzyme';
import mockMovies from '../../__mocks__/mockMovies';
import Movie from "./Movie";

describe('Results component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Router>
                <Movie chooseMovie={jest.fn()} data={mockMovies[2]} />
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('calls chooseMovie prop after clicking' , () => {
        const wrapper = shallow(<Router><Movie chooseMovie={jest.fn()} data={mockMovies[2]} /></Router>);
        const movie = wrapper.find('Movie').dive();

        movie.simulate('click');
        expect(wrapper.find('Movie').prop('chooseMovie').mock.calls.length).toBe(1);
    })
});
