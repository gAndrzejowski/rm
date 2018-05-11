import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('react-dom');

describe('App component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('initializes state', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('selectedMovie')).toBeNull();
        expect(wrapper.state('currentSort')).toBe('release_date');
        expect(wrapper.state('results')).toEqual(expect.any(Array));
    });
    it('has chooseMovie and resetMovie methods that handle selectedMovie state', () =>{
        const wrapper = shallow(<App />);
        wrapper.instance().chooseMovie('X');
        expect(wrapper.state('selectedMovie')).toBe('X');
        wrapper.instance().resetMovie();
        expect(wrapper.state('selectedMovie')).toBeNull();
    });
    it('has changeSorting method that handles currentSort state', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().changeSorting('some_criterion');
        expect(wrapper.state('currentSort')).toBe('some_criterion');
    });
    it('has a getSortingFunc method that returns function to sort an array of objects by currentSort property in descending order', () => {
        const wrapper = shallow(<App />);
        const toSort = [{a:2, b:3}, {a:3, b:1}, {a:1, b:2}];
        wrapper.instance().changeSorting('a');
        let sorter = wrapper.instance().getSortingFunc();
        expect(toSort.sort(sorter)).toEqual([{a:3, b:1}, {a:2, b:3}, {a:1, b:2}]);
        wrapper.instance().changeSorting('b');
        sorter = wrapper.instance().getSortingFunc();
        expect(toSort.sort(sorter)).toEqual([{a:2, b:3}, {a:1, b:2}, {a:3, b:1}]);
    });
});