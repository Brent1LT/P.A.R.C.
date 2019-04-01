import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

let configureStore;
if (process.env.NODE_ENV === 'production') {
  configureStore = (preloadedState = {}) => (
    createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk)
    )
  );
} else {
  configureStore = (preloadedState = {}) => (
    createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger)
    )
  );
}

export default configureStore;
