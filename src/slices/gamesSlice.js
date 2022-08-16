/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: null,
  gamesLoadingStatus: 'idle',
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
  gameSeriesFetching,
  gameSeriesFetched,
  gameSeriesFetchingError,
  gameSeriesReset,
} = actions;
