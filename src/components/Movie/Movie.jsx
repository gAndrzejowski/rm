// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './Movie.scss';
import type { MovieData } from '../../flowTypes';

type Props = {
  data: MovieData,
  chooseMovie: () => void
}

const Movie = ({ data, chooseMovie } :Props) => (
  <Link href={`/film/${data.id}`} to={`/film/${data.id}`} className={styles.panel} onClick={chooseMovie}>
    <img className={styles.poster} src={data.poster_path} alt={data.title} />
    <MovieInfo title={data.title} year={data.release_date.substring(0, 4)} genres={data.genres} />
  </Link>
);

export default Movie;
