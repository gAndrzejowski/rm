// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import injectStylesheet from 'react-jss';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './Movie.styles';
import type { MovieData } from '../../flowTypes';

type Props = {
  data: MovieData,
  chooseMovie: () => void,
  classes: Object,
}

export const Movie = ({ data, chooseMovie, classes } :Props) => (
  <Link href={`/film/${data.id}`} to={`/film/${data.id}`} className={classes.panel} onClick={chooseMovie}>
    <img className={classes.poster} src={data.poster_path} alt={data.title} />
    <MovieInfo title={data.title} year={data.release_date.substring(0, 4)} genres={data.genres} />
  </Link>
);
Movie.defaultProps = {
  classes: {},
};

export default injectStylesheet(styles)(Movie);
