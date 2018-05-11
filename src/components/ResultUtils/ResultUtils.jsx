import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './ResultUtils.scss';

const ResultUtils = ({numFound, currentSort, changeSorting}) => (
        <div className={styles.resultUtils}>
            {numFound > 0 && (
                <Fragment>
                    <p>{`${numFound} movies found`}</p>
                    <div className={styles.sort}>
                        <div>Sort By</div>
                        <div onClick={()=>changeSorting('release_date')} className={currentSort==='release_date' ? styles.active : ''}>release date</div>
                        <div onClick={()=>changeSorting('vote_average')} className={currentSort==='vote_average' ? styles.active : ''}>rating</div>
                    </div>
                </Fragment>
            )}
        </div>
    );

ResultUtils.propTypes = {
  numFound: PropTypes.number,
  currentSort: PropTypes.string,
  changeSorting: PropTypes.func.isRequired
};
export default ResultUtils;
