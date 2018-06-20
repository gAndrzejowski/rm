import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResultUtils from '../ResultUtils/ResultUtils';
import { searchMovies } from '../../actions/async';
import { setCurrentMovie } from '../../actions/creators';
import Results from '../Results/Results';

export class SearchResults extends React.Component {
  static defaultProps = {
    currentSearch: '',
  }
  componentWillMount = () => {
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
SearchResults.propTypes = {
  currentSearch: PropTypes.string,
  currentCrit: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
export const mapStateToProps = state => ({
  currentSearch: state.heading.search,
  currentCrit: state.heading.by,
});
export const mapDispatchToProps = dispatch => ({
  search: async (query, searchBy) => dispatch(await searchMovies(query, searchBy)),
  clearSelection: () => dispatch(setCurrentMovie(null)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
