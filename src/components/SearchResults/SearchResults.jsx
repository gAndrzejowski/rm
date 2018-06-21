// @flow
import React from 'react';
import { connect } from 'react-redux';
import ResultUtils from '../ResultUtils/ResultUtils';
import { searchMovies } from '../../actions/async';
import { setCurrentMovie } from '../../actions/creators';
import Results from '../Results/Results';
import { RouteMatch, Store } from '../../flowTypes';

type Props = {
  currentSearch: number,
  currentCrit: string,
  search: (string, string) => Promise<any>,
  clearSelection: () => void,
  match: RouteMatch,
}

export class SearchResults extends React.Component<Props> {
  static defaultProps = {
    currentSearch: '',
  }
  componentWillMount = () :void => {
    const {
      match: { params }, search, clearSelection, currentSearch, currentCrit,
    } = this.props;
    if (params.query === currentSearch && params.by === currentCrit) return;
    search(params.query, params.by);
    clearSelection();
  };
  render = () => (
    <article>
      <ResultUtils />
      <Results />
    </article>
  )
}

export const mapStateToProps = (state :Store) => ({
  currentSearch: state.heading.search,
  currentCrit: state.heading.by,
});

export const mapDispatchToProps = (dispatch :any => any) => ({
  search: async (query :string, searchBy :string) :Promise<any> =>
    dispatch(await searchMovies(query, searchBy)),
  clearSelection: () => dispatch(setCurrentMovie(null)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
