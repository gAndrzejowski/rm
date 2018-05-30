import React from 'react';
import MovieHeader from '../MovieHeader/MovieHeader.jsx';
import SearchHeader from "../SearchHeader/SearchHeader";
import {Route} from 'react-router'

const Heading = () =>(
    <header>
        <Route exact path="/film/:id" component={MovieHeader} />
        <Route path="*" component={SearchHeader} />
    </header>
);
export default Heading;
