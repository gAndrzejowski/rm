import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {searchMovies} from '../../actions/async';
import {set_search_txt, set_search_criterion} from "../../actions/creators";
import styles from './SearchBox.scss';

export const SearchBox = ({searchBy, query, search, onQueryChange, onCriterionChosen}) => (
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
                   <Link to={`/search/${searchBy}/${query}`}>
                       <button className={styles.search} onClick={()=>search(query, searchBy)}>Search</button>
                   </Link>
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

export const mapStateToProps = (state) => ({
    query: state.heading.search,
    searchBy: state.heading.by
});

export const mapDispatchToProps = (dispatch) => ({
    onQueryChange: event => dispatch(set_search_txt(event.target.value)),
    onCriterionChosen: crit => dispatch(set_search_criterion(crit)),
    search: async (query, searchBy) => dispatch(await searchMovies(query, searchBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
