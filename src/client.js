import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import configureStore from './util/configureStore';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
    <App
        Router = {BrowserRouter}
        Store = {store}
    />,
    document.getElementById('main')
);