/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import screenshots from '../reducers/screenshots';
import games from '../reducers/games';
import movies from '../reducers/movies';

const store = createStore(
  combineReducers({ games, screenshots, movies }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
