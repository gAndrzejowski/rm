import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './util/configureStore';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;
const preload_script = document.getElementById('__preloaded_state__');
preload_script.parentNode.removeChild(preload_script);

hydrate(
  <App
    Router={BrowserRouter}
    Store={store}
  />,
  document.getElementById('main'),
);
