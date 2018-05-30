import React from 'react';
import MovieHeader from '../MovieHeader/MovieHeader.jsx';
import SearchHeader from "../SearchHeader/SearchHeader";
import {Switch, Route} from 'react-router'

const Heading = () =>(
    <header>
        <Switch>
            <Route exact path="/film/:id" component={MovieHeader} />
            <Route path="*" component={SearchHeader} />
        </Switch>
    </header>
);
export default Heading;
