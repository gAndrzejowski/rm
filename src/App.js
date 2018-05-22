import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {createStore } from 'redux';
import {Provider} from 'react-redux';
import Heading from './components/Heading/Heading';
import Footing from './components/Footing/Footing';
import Results from './components/Results/Results';
import ResultUtils from './components/ResultUtils/ResultUtils';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import rootReducer from './reducers/rootReducer';
import styles from './App.scss';

const store = createStore(rootReducer);

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