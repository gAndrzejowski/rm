import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './Movie.scss';

const Movie = ({ data, chooseMovie }) => (
  <Link href={`/film/${data.id}`} to={`/film/${data.id}`} className={styles.panel} onClick={chooseMovie}>
    <img className={styles.poster} src={data.poster_path} alt={data.title} />
    <MovieInfo title={data.title} year={data.release_date.substring(0, 4)} genres={data.genres} />
  </Link>
);

Movie.propTypes = {
  data: PropTypes.object.isRequired,
  chooseMovie: PropTypes.func.isRequired,
};

export default Movie;
