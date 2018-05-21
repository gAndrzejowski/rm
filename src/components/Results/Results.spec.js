import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import mockMovies from '../../__mocks__/mockMovies';
import { Results } from "./Results";

describe('Results component', () => {
    it('renders correctly when there are movies to display', () => {
        const tree = renderer.create(<Results
            chooseMovie={jest.fn()}
            results={mockMovies}
            getSameGenre={jest.fn()}
            setTxt={jest.fn()}
            setCrit={jest.fn()}
        />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly when there are no movies to display', () => {
        const tree = renderer.create(<Results
            chooseMovie={jest.fn()}
            results={[]}
            getSameGenre={jest.fn()}
            setTxt={jest.fn()}
            setCrit={jest.fn()}
        />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('calls chooseMovie, getSameGenre, setTxt and setCrit props with the right data after calling one of the child components chooseMovie props', () => {
        const wrapper = shallow(<div><Results
            chooseMovie={jest.fn()}
            results={mockMovies}
            getSameGenre={jest.fn()}
            setTxt={jest.fn()}
            setCrit={jest.fn()}
        /></div>);
        const results = wrapper.find('Results').dive();

        results.find('Movie').at(3).prop('chooseMovie')();
        results.find('Movie').at(6).prop('chooseMovie')();

        expect(wrapper.find('Results').prop('chooseMovie').mock.calls[0][0]).toEqual(mockMovies[3]);
        expect(wrapper.find('Results').prop('chooseMovie').mock.calls[1][0]).toEqual(mockMovies[6]);

        expect(wrapper.find('Results').prop('getSameGenre').mock.calls[0][0]).toBe(mockMovies[3].genres[0]);
        expect(wrapper.find('Results').prop('getSameGenre').mock.calls[1][0]).toBe(mockMovies[6].genres[0]);

        expect(wrapper.find('Results').prop('setTxt').mock.calls[0][0]).toBe(mockMovies[3].genres[0]);
        expect(wrapper.find('Results').prop('setTxt').mock.calls[1][0]).toBe(mockMovies[6].genres[0]);

        expect(wrapper.find('Results').prop('setCrit').mock.calls.length).toBe(2);
    })
});