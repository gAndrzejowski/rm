// @flow
import React from 'react';
import injectStylesheet from 'react-jss';
import styles from './MovieInfo.styles';

type Props = {
  title: string,
  year: string,
  genres: Array<string>,
  classes: Object,
};

const MovieInfo = ({
  classes, title, year, genres,
} :Props) => (
  <div>
    <div className={classes.info}>
      <div className={classes.title}>{title}</div>
      <div className={classes.releaseDate}>{year}</div>
    </div>
    <p className={classes.genres}>
      {genres.join(', ')}
    </p>
  </div>
);
MovieInfo.defaultProps = {
  classes: {},
};

export default injectStylesheet(styles)(MovieInfo);
