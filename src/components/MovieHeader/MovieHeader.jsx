import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../Heading/Heading.scss';
import PageTitle from '../PageTitle/PageTitle';
import BackToSearch from '../BackToSearch/BackToSearch';
import MoviePage from '../MoviePage/MoviePage';
import { setCurrentMovie } from '../../actions/creators';
import { getById } from '../../actions/async';

export const MovieHeader = ({
  match: { params: { id } }, selectedMovie, backToSearch, getMovie,
}) => {
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

MovieHeader.propTypes = {
  match: PropTypes.object,
  selectedMovie: PropTypes.object,
  backToSearch: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  selectedMovie: state.heading.selected,
});

export const mapDispatchToProps = dispatch => ({
  backToSearch: () => dispatch(setCurrentMovie(null)),
  getMovie: async id => dispatch(await getById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);
