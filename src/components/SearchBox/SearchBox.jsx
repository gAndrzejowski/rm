// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import injectStylesheet from 'react-jss';
import { searchMovies } from '../../actions/async';
import { setSearchTxt, setSearchCriterion } from '../../actions/creators';
import styles from './SearchBox.styles';
import type { Store } from '../../flowTypes';

type Props = {
  searchBy: string,
  query: string,
  onQueryChange: Event => void,
  onCriterionChosen: string => void,
  search: (string, string) => void,
  classes: Object,
}

export const SearchBox = ({
  searchBy, query, search, onQueryChange, onCriterionChosen, classes,
}: Props) => (
  <Fragment>
    <h2>Find your movie</h2>
    <input
      className={classes.searchInput}
      type="text"
      placeholder={searchBy === 'title' ? 'Kill Bill' : 'Action'}
      onChange={onQueryChange}
      value={query}
    />
    <div className={classes.controls}>
      <div className={classes.controls}>
                       Search by
        <button
          onClick={() => onCriterionChosen('title')}
          className={searchBy === 'title' ? classes.btnActive : classes.btnInactive}
        >title
        </button>
        <button
          onClick={() => onCriterionChosen('genres')}
          className={searchBy === 'genres' ? classes.btnActive : classes.btnInactive}
        >genre
        </button>
      </div>
      <Link href={`/search/${searchBy}/${query}`} to={`/search/${searchBy}/${query}`}>
        <button className={classes.search} onClick={() => search(query, searchBy)}>Search</button>
      </Link>
    </div>
  </Fragment>
);

SearchBox.defaultProps = {
  query: '',
  classes: {},
};

export const mapStateToProps = (state :Store):{
  query: string,
  searchBy: string
} => ({
  query: state.heading.search,
  searchBy: state.heading.by,
});

export const mapDispatchToProps = (dispatch :any) => ({
  onQueryChange: (event: Object) => dispatch(setSearchTxt(event.target.value)),
  onCriterionChosen: (crit :string) => dispatch(setSearchCriterion(crit)),
  search: async (query :string, searchBy :string) => dispatch(await searchMovies(query, searchBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectStylesheet(styles)(SearchBox));
