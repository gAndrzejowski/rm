// @flow
import React from 'react';
import styles from './MoviePage.scss';
import type { MovieData } from '../../flowTypes';

const MoviePage = (props :{movie: MovieData}) => {
  const {
    title,
    release_date: releaseDate,
    poster_path: posterPath,
    overview,
    runtime,
    vote_average: voteAverage,
    genres,
  } = props.movie;
  return (
    <div className={styles.moviePage}>
      <img className={styles.poster} src={posterPath} alt="" />
      <div className={styles.details}>
        <h1>{title} <span className={styles.rating}>{voteAverage}</span> </h1>
        <small>{genres.join(', ')}</small>
        <p>{`${releaseDate.substring(0, 4)}    ${runtime} min`}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;
