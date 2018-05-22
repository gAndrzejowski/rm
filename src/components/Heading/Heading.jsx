import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import SearchBox from '../SearchBox/SearchBox';
import MoviePage from '../MoviePage/MoviePage';
import styles from './Heading.scss';
import {connect} from 'react-redux';
import {set_current_movie} from "../../actions/creators";


export const Heading = ({selectedMovie, backToSearch}) =>
    <header>
        <div className={styles.top}>
            <PageTitle/>
            {selectedMovie && <button onClick={backToSearch}>Search</button>}
        </div>
        {selectedMovie ? (
            <MoviePage movie={selectedMovie}/>
        ) : (
            <SearchBox />
        )}
    </header>;

Heading.propTypes = {
    selectedMovie: PropTypes.object,
    backToSearch: PropTypes.func,
};

export const mapStateToProps = (state) => ({
    selectedMovie: state.heading.selected,
});
export const mapDispatchToProps = dispatch => ({
   backToSearch: () => dispatch(set_current_movie(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);