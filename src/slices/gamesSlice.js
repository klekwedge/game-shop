/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: null,
  gamesLoadingStatus: 'idle',
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
