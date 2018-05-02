import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import SearchBox from '../SearchBox/SearchBox';
import MoviePage from '../MoviePage/MoviePage';
import styles from './Heading.scss';


const Heading = (props) => {
    return (
        <header>
            <div className={styles.top}>
                <PageTitle />
                {props.selectedMovie && <button onClick={props.backToSearch}>Search</button>}
            </div>
            {props.selectedMovie ? (
                <MoviePage movie={props.selectedMovie} />
            ) : (
                <SearchBox  search={props.search}/>
                )}
        </header>
    )
};
Heading.propTypes = {
    selectedMovie: PropTypes.object,
    search: PropTypes.func.isRequired,
};

export default Heading;