// @flow
import React from 'react';
import injectStylesheet from 'react-jss';
import styles from './PageTitle.styles';

const PageTitle = ({ classes } :Object) => <p className={classes.title}>netflixroulette</p>;
PageTitle.defaultProps = {
  classes: {},
};
export default injectStylesheet(styles)(PageTitle);
