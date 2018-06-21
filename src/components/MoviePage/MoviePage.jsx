// @flow
import React from 'react';
import injectStylesheet from 'react-jss';
import styles from './MoviePage.styles';
import type { MovieData } from '../../flowTypes';

const MoviePage = (props :{movie: MovieData, classes: Object}) => {
  const {
    title,
    release_date: releaseDate,
    poster_path: posterPath,
    overview,
    runtime,
    vote_average: voteAverage,
    genres,
  } = props.movie;
  const { classes } = props;
  return (
    <div className={classes.moviePage}>
      <img className={classes.poster} src={posterPath} alt="" />
      <div className={classes.details}>
        <h1>{title} <span className={classes.rating}>{voteAverage}</span> </h1>
        <small>{genres.join(', ')}</small>
        <p>{`${releaseDate.substring(0, 4)}    ${runtime} min`}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};
MoviePage.defaultProps = {
  classes: {},
};

export default injectStylesheet(styles)(MoviePage);
