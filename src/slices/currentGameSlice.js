/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentGame: null,
  currentGameLoadingStatus: 'idle',
  achievements: [],
  achievementsLoadingStatus: 'idle',
  nextAchievementsPage: null,
  achievementsAmount: 0,
  additions: [],
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
      state.achievements.push(...action.payload);
      state.achievementsLoadingStatus = 'idle';
    },
    achievementsFetchingError: (state) => {
      state.achievementsLoadingStatus = 'error';
    },
    achievementsReset: (state) => {
      state.achievements = [];
    },
    nextAchievements: (state, action) => {
      state.nextAchievementsPage = action.payload;
    },
    getAchievementsAmount: (state, action) => {
      state.achievementsAmount = action.payload;
    },
    additionsFetching: () => {
      // state.achievementsLoadingStatus = 'loading';
    },
    additionsFetched: (state, action) => {
      state.additions = action.payload;
    },
    additionsFetchingError: () => {
      // state.achievementsLoadingStatus = 'error';
    },
    additionsReset: (state) => {
      state.achievements = [];
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
  achievementsReset,
  nextAchievements,
  getAchievementsAmount,
  additionsFetching,
  additionsFetched,
  additionsFetchingError,
} = actions;
