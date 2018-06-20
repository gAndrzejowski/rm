import React from 'react';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import renderMarkup from './renderMarkup';
import App from './App';
import { searchMovies, getById, getByGenre } from './actions/async';
import rootReducer from './reducers/rootReducer';

export default async (url, queryParams = {}) => {
  const store = createStore(rootReducer);
  const { search, id } = queryParams;
  if (search) store.dispatch(await searchMovies(search.query, search.by));
  else if (id) {
    store.dispatch(await getById(id));
    const genre = store.getState().heading.movie;
    store.dispatch(await getByGenre(genre));
  }
  const context = {};

  const component = await (<App
    context={context}
    location={url}
    Router={StaticRouter}
    Store={store}
  />);

  return renderMarkup(component, store.getState());
};
