import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.scss';

export default function MovieInfo(props) {
    const {title, year, genres} = props;
    return (
        <div>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.releaseDate}>{year}</div>
            </div>
            <p className={styles.genres}>
                {genres.join(', ')}
            </p>
        </div>
    )
}

MovieInfo.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
};