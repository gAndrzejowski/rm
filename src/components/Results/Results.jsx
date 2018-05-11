import React from 'react';
import PropTypes from 'prop-types';
import NoMovies from '../NoMovies/NoMovies';
import Movie from '../Movie/Movie'
import styles from './Results.scss';

const Results = ({results, chooseMovie}) => (
        <article className={styles.list}>
            {results.length===0 ? <NoMovies /> : results.map( (e, i) => (
                <Movie
                    key={e.id}
                    chooseMovie={() => chooseMovie(i)}
                    data={e}
                />))
            }

        </article>
    );

Results.propTypes = {
    results: PropTypes.array,
    chooseMovie: PropTypes.func.isRequired
};

export default Results;