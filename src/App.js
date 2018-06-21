// @flow
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Heading from './components/Heading/Heading';
import Footing from './components/Footing/Footing';
import NoMovies from './components/NoMovies/NoMovies';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import Related from './components/Related/Related';
import SearchResults from './components/SearchResults/SearchResults';
import styles from './App.scss';

type Props = {
  Router :(any) => any,
  location?: string,
  context?: Object,
  Store: Object
};

const App = ({
  Router, location, context, Store,
} :Props) => (
  <Provider store={Store}>
    <Router location={location} context={context}>
      <Fragment>
        <ErrorBoundary>
          <Heading />
        </ErrorBoundary>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={NoMovies} />
            <Route exact path="/film/:id" component={Related} />
            <Route exact path="/search/:by/:query" component={SearchResults} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ErrorBoundary>
        <ErrorBoundary>
          <Footing />
        </ErrorBoundary>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
