// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import injectStylesheet from 'react-jss';
import { searchAndSort } from '../../actions/async';
import styles from './ResultUtils.styles';
import type { MovieData, Store } from '../../flowTypes';

type Props = {
  numFound: number,
  currentSort: string,
  search: string,
  by: string,
  changeSorting: (string, string, string) => Promise<any>,
  selected: MovieData,
  classes: Object,
}

export const ResultUtils = ({
  numFound, currentSort, changeSorting, search, by, selected, classes,
} :Props) => (
  <div className={classes.resultUtils}>
    {numFound > 0 && (
    <Fragment>
      <p>{(selected && selected.genres) ? `Films by ${selected.genres[0]} genre` : `${numFound} movies found`}</p>
      <div className={classes.sort}>
        <div>Sort By</div>
        <div onClick={() => changeSorting('release_date', search, by)} className={currentSort === 'release_date' ? classes.active : ''} role="button">release date</div>
        <div onClick={() => changeSorting('vote_average', search, by)} className={currentSort === 'vote_average' ? classes.active : ''} role="button">rating</div>
      </div>
    </Fragment>
            )}
  </div>
);
ResultUtils.defaultProps = {
  classes: {},
};

export const mapStateToProps = (state :Store) => ({
  numFound: state.movies.results.length,
  currentSort: state.movies.sort,
  search: state.heading.search,
  by: state.heading.by,
  selected: state.heading.selected,
});
export const mapDispatchToProps = (dispatch :any) => ({
  changeSorting: async (crit :string, search :string, by :string) =>
    dispatch(await searchAndSort(crit, search, by)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectStylesheet(styles)(ResultUtils));
