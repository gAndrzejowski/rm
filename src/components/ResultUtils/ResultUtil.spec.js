import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ResultUtils } from './ResultUtils';
import styles from 'ResultUtils.scss';

describe('ResultUtil components', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ResultUtils changeSorting={jest.fn()} currentSort="release_date" numFound={10} />);
        expect(tree).toMatchSnapshot();
    });
    it('assigns active class to proper option div based on currentSort prop', () => {
        const wrapper = shallow(<ResultUtils changeSorting={jest.fn()} currentSort="release_date" numFound={10} />)
        expect(wrapper.find(`.${styles.active}`).text()).toBe('release date');

        wrapper.setProps({currentSort: 'vote_average'});
        expect(wrapper.find(`.${styles.active}`).text()).toBe('rating');
    });
    it('calls changeSorting with proper args when one of the option divs is clicked', () => {
        const wrapper = shallow(<div><ResultUtils changeSorting={jest.fn()} currentSort="release_date" numFound={10} /></div>);
        const utils = wrapper.find('ResultUtils').first().dive();
        utils.find('div[onClick]').first().simulate('click');
        utils.find('div[onClick]').at(1).simulate('click');
        const sortMock = wrapper.find('ResultUtils').first().prop('changeSorting');
         expect(sortMock.mock.calls.length).toBe(2);
        expect(sortMock.mock.calls[0][0]).toBe('release_date');
        expect(sortMock.mock.calls[1][0]).toBe('vote_average');
    });
});
