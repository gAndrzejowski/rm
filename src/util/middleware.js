const persistStore = store => next => (action) => {
  const result = next(action);
  window.localStorage.setItem('netflixRouletteStore', JSON.stringify(store.getState()));
  return result;
};
export default persistStore;
