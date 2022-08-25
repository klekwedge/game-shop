import { configureStore } from '@reduxjs/toolkit';
import games from '../slices/gamesSlice';
import currentGame from '../slices/currentGameSlice';
import genres from '../slices/genresSlice';
import trailers from '../slices/trailersSlice';

const store = configureStore({
  reducer: {
    games,
    currentGame,
    genres,
    trailers,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;