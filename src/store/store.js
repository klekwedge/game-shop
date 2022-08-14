import { configureStore } from '@reduxjs/toolkit';
import games from '../slices/gamesSlice';
import genres from '../slices/genresSlice';
import screenshots from '../slices/screenshotsSlice';
import movies from '../slices/moviesSlice';

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
