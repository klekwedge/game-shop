/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: null,
  gamesLoadingStatus: 'idle',
  currentGame: null,
  currentGameLoadingStatus: 'idle',
  gamesOfSeries: null,
  gamesOfSeriesLoadingStatus: 'idle',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesFetching: (state) => {
      state.gamesLoadingStatus = 'loading';
    },
    gamesFetched: (state, action) => {
      state.games = action.payload;
      state.gamesLoadingStatus = 'idle';
    },
    gamesFetchingError: (state) => {
      state.gamesLoadingStatus = 'error';
    },
    currentGameFetching: (state) => {
      state.currentGameLoadingStatus = 'loading';
    },
    currentGameFetched: (state, action) => {
      state.currentGame = action.payload;
      state.currentGameLoadingStatus = 'idle';
    },
    currentGameFetchingError: (state) => {
      state.currentGameLoadingStatus = 'error';
    },
    currentGameReset: (state) => {
      state.currentGame = null;
    },
    gameSeriesFetching: (state) => {
      state.gamesOfSeriesLoadingStatus = 'loading';
    },
    gameSeriesFetched: (state, action) => {
      state.gamesOfSeries = action.payload;
      state.gamesOfSeriesLoadingStatus = 'idle';
    },
    gameSeriesFetchingError: (state) => {
      state.gamesOfSeriesLoadingStatus = 'error';
    },
    gameSeriesReset: (state) => {
      state.gamesOfSeries = null;
    },
  },
});

const { actions, reducer } = gamesSlice;

export default reducer;
export const {
  gamesFetching,
  gamesFetched,
  gamesFetchingError,
  currentGameFetching,
  currentGameFetched,
  currentGameFetchingError,
  currentGameReset,
  gameSeriesFetching,
  gameSeriesFetched,
  gameSeriesFetchingError,
  gameSeriesReset,
} = actions;
