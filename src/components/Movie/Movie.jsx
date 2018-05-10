import React from 'react';
import PropTypes from 'prop-types';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './Movie.scss';

export default function Movie(props) {
  const {data, chooseMovie} = props;
  return (
      <div className={styles.panel} onClick={chooseMovie}>
          <img className={styles.poster} src={data.poster_path} />
          <MovieInfo title={data.title} year={data.release_date.substring(0,4)} genres={data.genres} />
      </div>
  )
}

Movie.propTypes = {
    data: PropTypes.object.isRequired,
    chooseMovie: PropTypes.func.isRequired
};