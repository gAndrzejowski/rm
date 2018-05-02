import React from 'react';
import PropTypes from 'prop-types';
import NoMovies from '../NoMovies/NoMovies';
import Movie from '../Movie/Movie'
import styles from './Results.scss';

export default function Results(props) {
    return (
        <article className={styles.list}>
            {props.results.length===0 ? <NoMovies /> : props.results.map( (e, i) => (
                <Movie
                    key={e.id}
                    chooseMovie={() => props.chooseMovie(i)}
                    data={e}
                />))
            }

        </article>
    )
}

Results.propTypes = {
    results: PropTypes.array,
    chooseMovie: PropTypes.func.isRequired
};