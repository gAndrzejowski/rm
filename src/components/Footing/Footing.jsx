// @flow
import React from 'react';
import injectSheet from 'react-jss';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Footing.styles';

const Footing = ({ classes } :Object) => (
  <footer className={classes.appFooting}>
    <PageTitle />
  </footer>);
export default injectSheet(styles)(Footing);
