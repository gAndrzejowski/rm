// @flow
import React from 'react';
import styles from './MovieInfo.scss';

type Props = {
  title: string,
  year: string,
  genres: Array<string>,
};

const MovieInfo = ({ title, year, genres } :Props) => (
  <div>
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.releaseDate}>{year}</div>
    </div>
    <p className={styles.genres}>
      {genres.join(', ')}
    </p>
  </div>
);

export default MovieInfo;
