import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';
import mockMovies from '../../__mocks__/mockMovies';
import { Results, mapStateToProps, mapDispatchToProps } from './Results';
import fetchMock from '../../__mocks__/fetchMock';
import {
  getMovies,
  setCurrentMovie,
  setSearchCriterion,
  setSearchTxt,
} from '../../actions/creators';
import { swaggerBase } from '../../util/calls';

describe('Results component', () => {
  it('renders correctly when there are movies to display', () => {
    const tree = renderer.create(
      <Router>
        <Results
          chooseMovie={jest.fn()}
          results={mockMovies}
          getSameGenre={jest.fn()}
          setSearchTxt={jest.fn()}
          setSearchCriterion={jest.fn()}
        />
      </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when there are no movies to display', () => {
    const tree = renderer.create(
      <Router>
        <Results
          chooseMovie={jest.fn()}
          results={[]}
          getSameGenre={jest.fn()}
          setTxt={jest.fn()}
          setCrit={jest.fn()}
        />
      </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('calls chooseMovie, getSameGenre, setSearchTxt and setSearchCriterion props with the right data after calling one of the child components chooseMovie props', () => {
    const wrapper = shallow(
      <Router>
        <Results
          chooseMovie={jest.fn()}
          results={mockMovies}
          getSameGenre={jest.fn()}
          setTxt={jest.fn()}
          setCrit={jest.fn()}
        />
      </Router>);
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
  });
});

describe('mapStateToProps function for Results', () => {
  it('takes results array from movies store', () => {
    const fakeState = {
      movies: {
        results: [1, 3, 5, 15],
      },
    };
    expect(mapStateToProps(fakeState)).toEqual({
      results: [1, 3, 5, 15],
    });
  });
});

describe('mapDispatchToProps for Results', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
    global.fetch.mockImplementation(fetchMock);
  });
  it('creates props object with chooseMovie, getSameGenre, setSearchTxt and setSearchCriterion methods', () => {
    const props = mapDispatchToProps();
    expect(props).toEqual({
      chooseMovie: expect.any(Function),
      getSameGenre: expect.any(Function),
      setTxt: expect.any(Function),
      setCrit: expect.any(Function),
    });
  });
  it('creates a chooseMovie function which dispatches a result of setCurrentMovie action creator with given data', () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    props.chooseMovie('totally a movie');
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    expect(fakeDispatch.mock.calls[0][0]).toEqual(setCurrentMovie('totally a movie'));
  });
  it('creates a setSearchTxt function which dispatches a result of setSearchTxt action creator with given string', () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    props.setTxt('Dracula related movies');
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    expect(fakeDispatch.mock.calls[0][0]).toEqual(setSearchTxt('Dracula related movies'));
  });
  it('creates a setSearchCriterion function wchich dispatches a result of setSearchCriterion action creator with \'genres\' param', () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    props.setCrit();
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    expect(fakeDispatch.mock.calls[0][0]).toEqual(setSearchCriterion('genres'));
  });
  it('creates a getSameGenre function which calls the swagger api for movies of same genre, and dispatches getMoviesies with results', async () => {
    const fakeDispatch = jest.fn();
    const props = mapDispatchToProps(fakeDispatch);
    await props.getSameGenre('Action');
    expect(fakeDispatch).toHaveBeenCalledTimes(1);
    const uri = `${swaggerBase}/movies?search=Action&searchBy=genres&sortBy=title&sortOrder=desc`;
    expect(fakeDispatch.mock.calls[0][0]).toEqual(getMovies(uri));
  });
});
