import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ResultUtils, mapDispatchToProps, mapStateToProps } from './ResultUtils';
import styles from 'ResultUtils.scss';
import fetchMock from '../../__mocks__/fetchMock';
import { sort_movies } from "../../actions/creators";
import { swaggerBase, swagger } from "../../util/calls";
import mockMovies from '../../__mocks__/mockMovies';

describe ('ResultUtil component', () => {
    it('renders correctly with movie not selected', () => {
        const tree = renderer.create(<ResultUtils changeSorting={jest.fn()} currentSort="release_date" numFound={10} />);
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly with movie selected', () => {
        const tree = renderer.create(<ResultUtils changeSorting={jest.fn()} selected={mockMovies[0]} currentSort="release_date" numFound={5} />)
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

describe('mapStateToProps function for ResultUtils', () => {
    it('returns an object with props mapped from state values', () => {
        const fakeState = {
            movies: {
                results: [1,2,3,4,9],
                sort: 'xxxyyy'
            },
            heading: {
                search: 'may of some year',
                by: 'date',
                selected: mockMovies[0]
            }
        };
        expect(mapStateToProps(fakeState)).toEqual({
            numFound: 5,
            currentSort: 'xxxyyy',
            search: 'may of some year',
            by: 'date',
            selected: mockMovies[0]
        });
    });
});

describe('mapDispatchToProps function for ResultUtils', () => {
    beforeAll(()=>{
        global.fetch = jest.fn();
        global.fetch.mockImplementation(fetchMock);
    });
    it('creates changeSorting function', () => {
        expect(mapDispatchToProps()).toEqual({
            changeSorting: expect.any(Function)
        });
    });
    it('changeSorting function dispatches SORT_MOVIES action with given criterion and result of API call', async () => {
        const fakeDispatch = jest.fn();
        const props = mapDispatchToProps(fakeDispatch);
        await props.changeSorting('crit', 'search', 'by');
        expect(fakeDispatch).toHaveBeenCalledTimes(1);
        expect(fakeDispatch.mock.calls[0][0]).toEqual(sort_movies('crit', `${swaggerBase}/movies?search=search&searchBy=by&sortBy=crit&sortOrder=desc`));
    })
});
