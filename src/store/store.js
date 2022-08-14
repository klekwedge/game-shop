import { configureStore } from '@reduxjs/toolkit';
import screenshots from '../reducers/screenshots';
import games from '../slices/gamesSlices';
import movies from '../reducers/movies';
import genres from '../slices/genresSlices';

const store = configureStore({
  reducer: {
    games,
    genres,
    screenshots,
    movies,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
