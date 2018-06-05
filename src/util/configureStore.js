import { createStore, applyMiddleware } from 'redux';
import { persistStore } from "./middleware";
import rootReducer from '../reducers/rootReducer';
import { hydrate_store, apply_preloaded } from "../actions/creators";

export default preloadedState => {
    const store = createStore(rootReducer, applyMiddleware(persistStore));

    store.dispatch(hydrate_store());
    store.dispatch(apply_preloaded(preloadedState));
    return store;
}