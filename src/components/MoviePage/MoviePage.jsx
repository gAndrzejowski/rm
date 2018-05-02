import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.scss';

export default function MoviePage(props) {
    const {
        title,
        release_date,
        poster_path,
        overview,
        runtime,
        vote_average,
        genres
    } = props.movie;
    return (
    <div className={styles.moviePage}>
        <img className={styles.poster} src={poster_path} />
        <div className={styles.details}>
            <h1>{title} <span className={styles.rating}>{vote_average}</span> </h1>
            <small>{genres.join(', ')}</small>
            <p>{`${release_date.substring(0,4)}    ${runtime} min`}</p>
            <p>{overview}</p>
        </div>
    </div>
    );
}

MoviePage.propTypes = {
   movie: PropTypes.object
};