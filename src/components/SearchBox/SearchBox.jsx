import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import swagger from '../../util/calls';
import {get_movies, set_search_txt, set_search_criterion} from "../../actions/creators";
import styles from './SearchBox.scss';

const SearchBox = ({searchBy, query, search, onQueryChange, onCriterionChosen}) => (
            <Fragment>
               <h2>Find your movie</h2>
               <input className={styles.searchInput}
                   type="text"
                   placeholder={searchBy === 'title' ? 'Kill Bill' : 'Action'}
                   onChange={onQueryChange}
                   value={query} />
               <div className={styles.controls}>
                   <div className={styles.controls}>
                       Search by
                       <button
                           onClick={() => onCriterionChosen('title')}
                           className={searchBy === 'title' ? styles.btnActive : styles.btnInactive}
                       >title</button>
                       <button
                           onClick={() => onCriterionChosen('genres')}
                           className={searchBy === 'genres' ? styles.btnActive : styles.btnInactive}
                       >genre</button>
                   </div>
                   <button className={styles.search} onClick={()=>search(query, searchBy)}>Search</button>
               </div>
           </Fragment>
        );

SearchBox.propTypes = {
    searchBy: PropTypes.string.isRequired,
    query: PropTypes.string,
    onQueryChange: PropTypes.func.isRequired,
    onCriterionChosen: PropTypes.func.isRequired,
    search:PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    query: state.heading.search,
    searchBy: state.heading.by
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChange: event => dispatch(set_search_txt(event.target.value)),
    onCriterionChosen: crit => dispatch(set_search_criterion(crit)),
    search: async (query, searchBy) => {
        const results = await swagger({
            search: query,
            searchBy
        });
        return dispatch(get_movies(results.data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
