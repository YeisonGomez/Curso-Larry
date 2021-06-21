import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootReducers from './Reducers';

export default (history) => {

  const routeMiddleware = routerMiddleware(history);
  let middleware = [routeMiddleware, logger];

  const store = createStore(
    rootReducers(history),
    applyMiddleware(...middleware)
  );
  
  return store;
};