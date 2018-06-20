import React from 'react';
import { Switch, Route } from 'react-router';
import MovieHeader from '../MovieHeader/MovieHeader';
import SearchHeader from '../SearchHeader/SearchHeader';

const Heading = () => (
  <header>
    <Switch>
      <Route exact path="/film/:id" component={MovieHeader} />
      <Route path="*" component={SearchHeader} />
    </Switch>
  </header>
);
export default Heading;
