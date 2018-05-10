import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import SearchBox from '../SearchBox/SearchBox';
import MoviePage from '../MoviePage/MoviePage';
import styles from './Heading.scss';


const Heading = ({selectedMovie, backToSearch, search}) =>
    <header>
        <div className={styles.top}>
            <PageTitle/>
            {selectedMovie && <button onClick={backToSearch}>Search</button>}
        </div>
        {selectedMovie ? (
            <MoviePage movie={selectedMovie}/>
        ) : (
            <SearchBox search={search}/>
        )}
    </header>;

Heading.propTypes = {
    selectedMovie: PropTypes.object,
    search: PropTypes.func.isRequired,
    backToSearch: PropTypes.func
};

export default Heading;