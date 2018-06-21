// @flow
import React from 'react';
import injectStylesheet from 'react-jss';
import styles from './NoMovies.styles';

const NoMovies = ({ classes } :Object) => (
  <article className={classes.noResults}>
    <h2>No films found</h2>
  </article>
);
NoMovies.defaultProps = {
  classes: {},
};
export default injectStylesheet(styles)(NoMovies);
