import React from 'react';
import styles from '../Heading/Heading.scss';
import SearchBox from '../SearchBox/SearchBox';
import PageTitle from '../PageTitle/PageTitle';

const SearchHeader = () => (
    <header>
        <div className={styles.top}>
            <PageTitle/>
        </div>
        <SearchBox/>
    </header>
);
export default SearchHeader;
