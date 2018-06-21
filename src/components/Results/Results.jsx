// @flow
import React from 'react';
import { connect } from 'react-redux';
import injectStylesheet from 'react-jss';
import { getByGenre } from '../../actions/async';
import { setCurrentMovie, setSearchTxt, setSearchCriterion } from '../../actions/creators';
import NoMovies from '../NoMovies/NoMovies';
import Movie from '../Movie/Movie';
import styles from './Results.styles';
import type { MovieData, Store } from '../../flowTypes';

type Props = {
  results: Array<string>,
  chooseMovie: MovieData => void,
  getSameGenre: string => void,
  setTxt: string => void,
  setCrit: () => void,
  classes: Object,
}
export const Results = ({
  results, chooseMovie, getSameGenre, setTxt, setCrit, classes,
} :Props) => (
  <article className={classes.list}>
    {results.length === 0 ? <NoMovies /> : results.map((e :MovieData) => (
      <Movie
        key={e.id}
        chooseMovie={() => {
                        chooseMovie(e);
                        setTxt(e.genres[0]);
                        setCrit();
                        getSameGenre(e.genres[0]);
                    }}
        data={e}
      />))
            }

  </article>
);

Results.defaultProps = {
  classes: {},
};
export const mapStateToProps = (state :Store) => ({
  results: state.movies.results,
});

export const mapDispatchToProps = (dispatch :any) => ({
  chooseMovie: (movie :MovieData) => dispatch(setCurrentMovie(movie)),
  getSameGenre: async (genre :string) :Promise<any> => dispatch(await getByGenre(genre)),
  setTxt: (genre :string) => dispatch(setSearchTxt(genre)),
  setCrit: () => dispatch(setSearchCriterion('genres')),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectStylesheet(styles)(Results));
