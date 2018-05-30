import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getByGenre} from "../../actions/async";
import {set_current_movie, set_search_txt, set_search_criterion} from "../../actions/creators";
import NoMovies from '../NoMovies/NoMovies';
import Movie from '../Movie/Movie'
import styles from './Results.scss';

export const Results = ({results, chooseMovie, getSameGenre, setTxt, setCrit}) => (
        <article className={styles.list}>
            {results.length===0 ? <NoMovies /> : results.map( (e) => (
                <Movie
                    key={e.id}
                    chooseMovie={() => {
                        chooseMovie(e);
                        setTxt(e.genres[0]);
                        setCrit();
                        getSameGenre(e.genres[0]);
                    }}
                    data={e}
                />))
            }

        </article>
    );

Results.propTypes = {
    results: PropTypes.array.isRequired,
    chooseMovie: PropTypes.func.isRequired,
    getSameGenre: PropTypes.func.isRequired,
    setTxt: PropTypes.func.isRequired,
    setCrit: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
    results: state.movies.results
});

export const mapDispatchToProps = (dispatch) => ({
    chooseMovie: movie => dispatch(set_current_movie(movie)),
    getSameGenre: async genre => dispatch(await getByGenre(genre)),
    setTxt: genre => dispatch(set_search_txt(genre)),
    setCrit: () => dispatch(set_search_criterion('genres'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
