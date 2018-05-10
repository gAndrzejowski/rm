import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import mockMovies from '../../__mocks__/mockMovies';
import Movie from "./Movie";

describe('Results component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Movie chooseMovie={jest.fn()} data={mockMovies[2]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('calls chooseMovie prop after clicking' , () => {
        const wrapper = shallow(<div><Movie chooseMovie={jest.fn()} data={mockMovies[2]} /></div>);
        const movie = wrapper.find('Movie').dive();

        movie.simulate('click');
        expect(wrapper.find('Movie').prop('chooseMovie').mock.calls.length).toBe(1);
    })
});
