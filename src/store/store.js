import { configureStore } from '@reduxjs/toolkit';
import screenshots from '../reducers/screenshots';
import games from '../slices/gamesSlice';
import movies from '../slices/moviesSlice';
import genres from '../slices/genresSlice';

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
