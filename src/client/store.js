import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import reducersCombined from './modules/combinedReducers';

// If you have a Redux extesion for Chrome.
const enhacers = (window.devToolsExtension ? window.devToolsExtension() : f => f);

const preLoadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

export const store = createStore(
  reducersCombined,
  preLoadedState,
  compose(
    applyMiddleware(thunk),
    enhacers
  )
);

export default store;
