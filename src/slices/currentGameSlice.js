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
  gamesOfSeries: null,
  gamesOfSeriesLoadingStatus: 'idle',
};

export const fetchGame = createAsyncThunk('currentGame/fetchGame', (url) => {
  const { request } = useHttp();
  return request(url);
});

export const fetchAchievements = createAsyncThunk('currentGame/fetchAchievements', (url) => {
  const { request } = useHttp();
  return request(url);
});

export const fetchGameSeries = createAsyncThunk('currentGame/fetchGameSeries', (url) => {
  const { request } = useHttp();
  return request(url);
});

const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
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
    gameSeriesReset: (state) => {
      state.gamesOfSeries = null;
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
      .addCase(fetchAchievements.pending, (state) => {
        state.achievementsLoadingStatus = 'loading';
      })
      .addCase(fetchAchievements.fulfilled, (state, action) => {
        state.achievementsLoadingStatus = 'idle';
        state.achievements.push(...action.payload.results);
        state.nextAchievementsPage = action.payload.next;
        state.achievementsAmount = action.payload.count;
      })
      .addCase(fetchAchievements.rejected, (state) => {
        state.achievementsLoadingStatus = 'error';
      })
      .addCase(fetchGameSeries.pending, (state) => {
        state.gamesOfSeriesLoadingStatus = 'loading';
      })
      .addCase(fetchGameSeries.fulfilled, (state, action) => {
        state.gamesOfSeries = action.payload;
        state.gamesOfSeriesLoadingStatus = 'idle';
      })
      .addCase(fetchGameSeries.rejected, (state) => {
        state.gamesOfSeriesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = currentGameSlice;

export default reducer;
export const {
  achievementsFetching,
  achievementsFetched,
  achievementsFetchingError,
  achievementsReset,
  nextAchievements,
  getAchievementsAmount,
  additionsFetching,
  additionsFetched,
  additionsFetchingError,
  gameSeriesReset,
} = actions;
