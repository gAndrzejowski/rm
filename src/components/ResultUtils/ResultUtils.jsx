import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {sort_movies} from "../../actions/creators";
import PropTypes from 'prop-types';
import { swagger } from '../../util/calls';
import styles from './ResultUtils.scss';

export const ResultUtils = ({numFound, currentSort, changeSorting, search, by}) => (
        <div className={styles.resultUtils}>
            {numFound > 0 && (
                <Fragment>
                    <p>{`${numFound} movies found`}</p>
                    <div className={styles.sort}>
                        <div>Sort By</div>
                        <div onClick={()=>changeSorting('release_date', search, by)} className={currentSort==='release_date' ? styles.active : ''}>release date</div>
                        <div onClick={()=>changeSorting('vote_average', search, by)} className={currentSort==='vote_average' ? styles.active : ''}>rating</div>
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
    changeSorting: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    numFound: state.movies.results.length,
    currentSort: state.movies.sort,
    search: state.heading.search,
    by: state.heading.by
});
const mapDispatchToProps = (dispatch) => ({
    changeSorting: async (crit, search, by) => {
        const results = await swagger({
            searchBy: by,
            sortBy: crit,
            search
        });
        return dispatch(sort_movies(crit, results.data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultUtils);
