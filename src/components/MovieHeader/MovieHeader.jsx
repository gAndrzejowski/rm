// @flow
import React from 'react';
import { connect } from 'react-redux';
import styles from '../Heading/Heading.scss';
import PageTitle from '../PageTitle/PageTitle';
import BackToSearch from '../BackToSearch/BackToSearch';
import MoviePage from '../MoviePage/MoviePage';
import { setCurrentMovie } from '../../actions/creators';
import { getById } from '../../actions/async';
import type { MovieData, RouteMatch, Store } from '../../flowTypes';

type Props = {
  match: RouteMatch,
  selectedMovie: MovieData,
  backToSearch: () => void,
  getMovie: number => void,
}
export const MovieHeader = ({
  match: { params: { id } }, selectedMovie, backToSearch, getMovie,
}: Props) => {
  if (!selectedMovie || selectedMovie.id !== +id) {
    getMovie(id);
    return null;
  }
  return (
    <header>
      <div className={styles.top}>
        <PageTitle />
        <BackToSearch onClick={backToSearch} />
      </div>
      <MoviePage movie={selectedMovie} />
    </header>
  );
};

export const mapStateToProps = (state :Store) => ({
  selectedMovie: state.heading.selected,
});

export const mapDispatchToProps = (dispatch :any) => ({
  backToSearch: () :void => dispatch(setCurrentMovie(null)),
  getMovie: async (id :number) :Promise<any> => dispatch(await getById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);
