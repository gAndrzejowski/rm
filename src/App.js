import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import Heading from './components/Heading/Heading';
import Footing from './components/Footing/Footing';
import NoMovies from './components/NoMovies/NoMovies';
import Results from './components/Results/Results';
import ResultUtils from './components/ResultUtils/ResultUtils';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NotFound404 from './components/NotFound404/Notfound404';
import Related from './components/Related/Related';
import SearchResults from './components/SearchResults/SearchResults';
import rootReducer from './reducers/rootReducer';
import {persistStore} from "./util/middleware";
import {hydrate_store} from "./actions/creators";
import styles from './App.scss';

const store = (window && window.localStorage) ? createStore(rootReducer, applyMiddleware(persistStore)) : createStore(rootReducer);
store.dispatch(hydrate_store());

const App = () => (
    <Router>
        <Fragment>
            <ErrorBoundary>
                <Heading />
            </ErrorBoundary>
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/" component={NoMovies} />
                    <Route exact path="/film/:id" component={Related} />
                    <Route exact path="/search/:by/:query" component={SearchResults} />
                    <Route path="*" component={NotFound404} />
                </Switch>
            </ErrorBoundary>
            <ErrorBoundary>
                <Footing />
            </ErrorBoundary>
        </Fragment>
    </Router>
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));

export default App;