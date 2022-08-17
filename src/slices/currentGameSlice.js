/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../hooks/http.hook';

const initialState = {
  currentGame: null,
  currentGameLoadingStatus: 'idle',
  achievements: [],
  achievementsLoadingStatus: 'idle',
  nextAchievementsPage: null,
  achievementsAmount: 0,
  additions: [],
};

export const fetchGame = createAsyncThunk('currentGame/fetchGame', (url) => {
  const { request } = useHttp();
  return request(url);
});

const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchGame.pending, (state) => {
        state.currentGameLoadingStatus = 'loading';
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.currentGameLoadingStatus = 'idle';
        state.currentGame = action.payload;
      })
      .addCase(fetchGame.rejected, (state) => {
        state.currentGameLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = currentGameSlice;

export default reducer;
export const {
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
