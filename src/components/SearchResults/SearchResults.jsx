import React from 'react';
import {connect} from 'react-redux';
import ResultUtils from "../ResultUtils/ResultUtils";
import {searchMovies} from "../../actions/async";
import {set_current_movie} from "../../actions/creators";
import Results from '../Results/Results';

class SearchResults extends React.Component {
    componentWillMount = () => {
        const {match: {params}, search, clearSelection, currentSearch, currentCrit} = this.props;
        if (params.query === currentSearch && params.by === currentCrit) return;
        search(params.query, params.by);
        clearSelection();
    };
    render = () => {
        return (
            <article>
                <ResultUtils/>
                <Results/>
            </article>
        )
    }
}
const mapStateToProps = (state)=>({
    currentSearch: state.heading.search,
    currentCrit: state.heading.by
});
const mapDispatchToProps = (dispatch) => ({
    search: async (query, searchBy) => dispatch(await searchMovies(query, searchBy)),
    clearSelection: () => dispatch(set_current_movie(null))
});
export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);