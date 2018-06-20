import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchAndSort } from '../../actions/async';
import styles from './ResultUtils.scss';

export const ResultUtils = ({
  numFound, currentSort, changeSorting, search, by, selected,
}) => (
  <div className={styles.resultUtils}>
    {numFound > 0 && (
    <Fragment>
      <p>{(selected && selected.genres) ? `Films by ${selected.genres[0]} genre` : `${numFound} movies found`}</p>
      <div className={styles.sort}>
        <div>Sort By</div>
        <div onClick={() => changeSorting('release_date', search, by)} className={currentSort === 'release_date' ? styles.active : ''} role="button">release date</div>
        <div onClick={() => changeSorting('vote_average', search, by)} className={currentSort === 'vote_average' ? styles.active : ''} role="button">rating</div>
      </div>
    </Fragment>
            )}
  </div>
);

ResultUtils.propTypes = {
  numFound: PropTypes.number,
  currentSort: PropTypes.string,
  search: PropTypes.string,
  by: PropTypes.string,
  changeSorting: PropTypes.func.isRequired,
  selected: PropTypes.object,
};

export const mapStateToProps = state => ({
  numFound: state.movies.results.length,
  currentSort: state.movies.sort,
  search: state.heading.search,
  by: state.heading.by,
  selected: state.heading.selected,
});
export const mapDispatchToProps = dispatch => ({
  changeSorting: async (crit, search, by) => dispatch(await searchAndSort(crit, search, by)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultUtils);
