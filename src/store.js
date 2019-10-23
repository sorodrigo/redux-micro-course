import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const composeEnhancers = (process.env.NODE_ENV === 'development' && reduxDevTools) || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
