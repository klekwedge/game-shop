/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentGame: null,
  currentGameLoadingStatus: 'idle',
  achievements: null,
  achievementsLoadingStatus: 'idle',
};

const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
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
    achievementsFetching: (state) => {
      state.achievementsLoadingStatus = 'loading';
    },
    achievementsFetched: (state, action) => {
      state.achievements = action.payload;
      state.achievementsLoadingStatus = 'idle';
    },
    achievementsFetchingError: (state) => {
      state.achievementsLoadingStatus = 'error';
    },
  },
});

const { actions, reducer } = currentGameSlice;

export default reducer;
export const {
  currentGameFetching,
  currentGameFetched,
  currentGameFetchingError,
  currentGameReset,
  achievementsFetching,
  achievementsFetched,
  achievementsFetchingError,
} = actions;
