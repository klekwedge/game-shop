import { configureStore } from '@reduxjs/toolkit';
import games from '../slices/gamesSlice/gamesSlice';
import currentGame from '../slices/currentGameSlice/currentGameSlice';
import genres from '../slices/genresSlice/genresSlice';

const store = configureStore({
  reducer: {
    games,
    currentGame,
    genres,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;