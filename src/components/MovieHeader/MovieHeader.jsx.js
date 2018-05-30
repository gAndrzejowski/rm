import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../Heading/Heading.scss';
import PageTitle from '../PageTitle/PageTitle';
import BackToSearch from '../BackToSearch/BackToSearch.jsx';
import MoviePage from '../MoviePage/MoviePage';
import {set_current_movie} from "../../actions/creators";

export const MovieHeader = ({match: {params: {id}}, selectedMovie, backToSearch}) => (
    <header>
        <div className={styles.top}>
            <PageTitle/>
            <BackToSearch onClick={backToSearch}/>
        </div>
            <MoviePage movie={selectedMovie}/>
    </header>
);

MovieHeader.propTypes = {
    match: PropTypes.object,
    selectedMovie: PropTypes.object,
    backToSearch: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
    selectedMovie: state.heading.selectedMovie
});

export const mapDispatchToProps = (dispatch) => ({
    backToSearch: () => dispatch(set_current_movie(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);
