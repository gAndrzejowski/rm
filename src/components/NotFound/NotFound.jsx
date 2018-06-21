// @flow
import React from 'react';
import injectStylesheet from 'react-jss';
import styles from './NotFound.styles';

const NotFound = ({ classes } :Object) => (
  <article className={classes.notfound}>
    <h2>We couldn{'\''}t find this page...</h2>
    <img src="img/404.jpg" alt="" />
    <p>Try another url or use the search box.</p>
  </article>
);
NotFound.defaultProps = {
  classes: {},
};
export default injectStylesheet(styles)(NotFound);
