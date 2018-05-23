import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import Heading from './components/Heading/Heading';
import Footing from './components/Footing/Footing';
import Results from './components/Results/Results';
import ResultUtils from './components/ResultUtils/ResultUtils';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import rootReducer from './reducers/rootReducer';
import {persistStore} from "./util/middleware";
import {hydrate_store} from "./actions/creators";
import styles from './App.scss';

const store = (window && window.localStorage) ? createStore(rootReducer, applyMiddleware(persistStore)) : createStore(rootReducer);
store.dispatch(hydrate_store());

const App = () => (
             <Fragment>
                <ErrorBoundary>
                    <Heading />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ResultUtils />
                    <Results />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Footing />
                </ErrorBoundary>
            </Fragment>
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));

export default App;