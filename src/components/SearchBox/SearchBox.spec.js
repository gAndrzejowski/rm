import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';
import { SearchBox, mapStateToProps, mapDispatchToProps } from './SearchBox';
import styles from './SearchBox.scss';
import fetchMock from '../../__mocks__/fetchMock';
import { setSearchCriterion, setSearchTxt, getMovies } from '../../actions/creators';
import { swaggerBase } from '../../util/calls';

describe('SearchBox component', () => {
  it('renders correctly with search by title selected', () => {
    const tree = renderer.create(
      <Router>
        <SearchBox
          query="test"
          search={jest.fn()}
          searchBy="title"
          onQueryChange={jest.fn()}
          onCriterionChosen={jest.fn()}
        />
      </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with search by genre selected', () => {
    const tree = renderer.create(
      <Router>
        <SearchBox
          searchBy="genres"
          onQueryChange={jest.fn()}
          onCriterionChosen={jest.fn()}
          search={jest.fn()}
          query="test2"
        />
      </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('calls the appropriate props when the input field\'s value changes', () => {
    const wrapper = shallow(
      <Router>
        <SearchBox
          query="test"
          search={jest.fn()}
          searchBy="title"
          onQueryChange={jest.fn()}
          onCriterionChosen={jest.fn()}
        />
      </Router>);
    const searchBox = wrapper.find('SearchBox').first().dive();
    searchBox.find(`.${styles.searchInput}`).simulate('change', { target: { value: 'Machete' } });
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
      <Router>
        <SearchBox
          query="test"
          search={jest.fn()}
          searchBy="title"
          onQueryChange={jest.fn()}
          onCriterionChosen={jest.fn()}
        />
      </Router>);
    const searchBox = wrapper.find('SearchBox').first().dive();
    const { mock } = wrapper.find('SearchBox').prop('search');

    searchBox.find(`.${styles.search}`).simulate('click');

    expect(mock.calls[0][0]).toBe('test');
    expect(mock.calls[0][1]).toBe('title');
  });
});

describe('MapStateToProps for SearchBox', () => {
  it('takes search string and search criterion from the store into the props object', () => {
    const fakeStore = {
      heading: {
        search: 'something',
        by: 'something else',
      },
    };
    expect(mapStateToProps(fakeStore)).toEqual({
      query: 'something',
      searchBy: 'something else',
    });
  });
});

describe('mapDispatchToProps for SearchBox', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
    global.fetch.mockImplementation(fetchMock);
  });
  it('creates an object with onQueryChange, onCriterionChosen and search methods', () => {
    expect(mapDispatchToProps()).toEqual({
      onQueryChange: expect.any(Function),
      onCriterionChosen: expect.any(Function),
      search: expect.any(Function),
    });
  });
  it('creates an onQueryChange method which dispatches a result of setSearchTxt action creator with value of the target of event passed', () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    const fakeEvent = {
      target: {
        value: 'searching',
      },
    };
    props.onQueryChange(fakeEvent);
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    expect(fakeDispatch.mock.calls[0][0]).toEqual(setSearchTxt('searching'));
  });
  it('creates an onCriterionChosen method which dispatches a result of setSearchCriterion action creator with value passed', () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    props.onCriterionChosen('Length');
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    expect(fakeDispatch.mock.calls[0][0]).toEqual(setSearchCriterion('Length'));
  });
  it('creates a search method which performs a search with swagger API based on search and criterion and then dispatches a result of getMovies creator with results', async () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    await props.search('Dracula', 'justDracula');
    const uri = `${swaggerBase}/movies?search=Dracula&searchBy=justDracula&sortBy=title&sortOrder=desc`;
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    expect(fakeDispatch.mock.calls[0][0]).toEqual(getMovies(uri));
  });
});
