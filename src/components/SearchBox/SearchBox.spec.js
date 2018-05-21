import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { SearchBox } from "./SearchBox";
import styles from './SearchBox.scss';

describe('SearchBox component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <SearchBox 
                query="test"
                search={jest.fn()}
                searchBy="title"
                onQueryChange={jest.fn()}
                onCriterionChosen={jest.fn()}
                />).toJSON();
        expect(tree).toMatchSnapshot()
    });
    it('calls the appropriate props when the input field\'s value changes', () => {
        const wrapper = shallow(
            <div>
                <SearchBox
                    query="test"
                    search={jest.fn()}
                    searchBy="title"
                    onQueryChange={jest.fn()}
                    onCriterionChosen={jest.fn()}
                />
            </div>);
        const searchBox = wrapper.find('SearchBox').first().dive();
        searchBox.find(`.${styles.searchInput}`).simulate('change', {target:{value:'Machete'}});
        expect(wrapper.find('SearchBox').prop('onQueryChange').mock.calls.length).toBe(1);
        expect(wrapper.find('SearchBox').prop('onQueryChange').mock.calls[0][0].target.value).toBe('Machete');

        searchBox.find('button[onClick]').at(1).simulate('click');
        expect(wrapper.find('SearchBox').prop('onCriterionChosen').mock.calls.length).toBe(1);
        expect(wrapper.find('SearchBox').prop('onCriterionChosen').mock.calls[0][0]).toBe('genres');

        searchBox.find('button[onClick]').at(0).simulate('click');
        expect(wrapper.find('SearchBox').prop('onCriterionChosen').mock.calls.length).toBe(2);
        expect(wrapper.find('SearchBox').prop('onCriterionChosen').mock.calls[1][0]).toBe('title');
    });
    it('calls the search prop after clicking the search button, and passes the state values', () => {
        const wrapper = shallow(
            <div>
                <SearchBox
                    query="test"
                    search={jest.fn()}
                    searchBy="title"
                    onQueryChange={jest.fn()}
                    onCriterionChosen={jest.fn()}
                />
            </div>);
        const searchBox = wrapper.find('SearchBox').first().dive();
        const mock =wrapper.find('SearchBox').prop('search').mock;

        searchBox.find(`.${styles.search}`).simulate('click')

        expect(mock.calls[0][0]).toBe('test');
        expect(mock.calls[0][1]).toBe('title');
    })
});