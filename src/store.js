import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import postsReducer from './posts';

const rootReducer = combineReducers({ users: usersReducer, posts: postsReducer });
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const composeEnhancers = (process.env.NODE_ENV === 'development' && reduxDevTools) || compose;
// const composedEnhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer);

export default store;
