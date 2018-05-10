import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchBox from "./SearchBox";
import styles from './SearchBox.scss';

describe('SearchBox component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SearchBox search={jest.fn()}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('initializes state as empty query and search by title', () => {
        const wrapper = shallow(<SearchBox search={jest.fn()}/>);
        expect(wrapper.state()).toEqual({
            query:'',
            searchBy:'title'
        });
    })
    it('changes the state based on change events in UI components and updates their value', () => {
        const wrapper = shallow(<div><SearchBox search={jest.fn()}/></div>);
        const searchBox = wrapper.find('SearchBox').first().dive();

        searchBox.find(`.${styles.searchInput}`).simulate('change', {target:{value:'Machete'}});
        expect(searchBox.state('query')).toBe('Machete');
        expect(searchBox.find(`.${styles.searchInput}`).prop('value')).toBe('Machete');

        searchBox.find('button[onClick]').at(1).simulate('click');
        expect(searchBox.state('searchBy')).toBe('genre');
        expect(searchBox.find('button[onClick]').at(1).prop('className')).toBe(styles.btnActive);
        expect(searchBox.find('button[onClick]').at(0).prop('className')).toBe(styles.btnInactive);

        searchBox.find('button[onClick]').at(0).simulate('click');
        expect(searchBox.state('searchBy')).toBe('title');
        expect(searchBox.find('button[onClick]').at(0).prop('className')).toBe(styles.btnActive);
        expect(searchBox.find('button[onClick]').at(1).prop('className')).toBe(styles.btnInactive);
    })
    it('calls the search prop after clicking the search button, and passes the state values', () => {
        const wrapper = shallow(<div><SearchBox search={jest.fn()}/></div>);
        const searchBox = wrapper.find('SearchBox').first().dive();
        const mock =wrapper.find('SearchBox').prop('search').mock;
        const stateMock = {
            query:'action',
            searchBy:'genre'
        };

        searchBox.setState(stateMock);
        searchBox.find(`.${styles.search}`).simulate('click')

        expect(mock.calls[0][0]).toBe(stateMock.query);
        expect(mock.calls[0][1]).toBe(stateMock.searchBy);
    })
});