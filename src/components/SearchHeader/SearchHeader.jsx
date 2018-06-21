// @flow
import React from 'react';
import injectSheet from 'react-jss';
import styles from '../Heading/Heading.styles';
import SearchBox from '../SearchBox/SearchBox';
import PageTitle from '../PageTitle/PageTitle';

const SearchHeader = ({ classes } :Object) => (
  <header>
    <div className={classes.top}>
      <PageTitle />
    </div>
    <SearchBox />
  </header>
);
export default injectSheet(styles)(SearchHeader);
