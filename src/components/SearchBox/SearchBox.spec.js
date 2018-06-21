import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router';
import { SearchBox, mapStateToProps, mapDispatchToProps } from './SearchBox';
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
