/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import screenshots from '../reducers/screenshots';
import games from '../reducers/games';

const store = createStore(
  combineReducers({ screenshots, games }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
