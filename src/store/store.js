import { configureStore } from '@reduxjs/toolkit';
import games from '../slices/gamesSlice';
import currentGame from '../slices/currentGameSlice';
import genres from '../slices/genresSlice';
import screenshots from '../slices/screenshotsSlice';
import movies from '../slices/trailersSlice';

const store = configureStore({
  reducer: {
    games,
    currentGame,
    genres,
    screenshots,
    movies,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
