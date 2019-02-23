import { createStore, applyMiddleware, compose } from 'redux';

import async from '../middleware/async';
import stateValidator from '../middleware/stateValidator';
import rootReducer from '../reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(rootReducer, composeEnhancer(applyMiddleware(async, stateValidator)));
}
