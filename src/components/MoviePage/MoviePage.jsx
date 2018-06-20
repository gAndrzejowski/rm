import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.scss';

const MoviePage = (props) => {
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

MoviePage.propTypes = {
  movie: PropTypes.object,
};
export default MoviePage;
