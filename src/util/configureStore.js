import { createStore, applyMiddleware } from 'redux';
import persistStore from './middleware';
import rootReducer from '../reducers/rootReducer';
import { hydrateStore, applyPreloaded } from '../actions/creators';

export default (preloadedState :Object<any>) :Object<any> => {
  const store = createStore(rootReducer, applyMiddleware(persistStore));

  store.dispatch(hydrateStore());
  store.dispatch(applyPreloaded(preloadedState));
  return store;
};
