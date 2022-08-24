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
  gamesOfSeries: [],
  gamesOfSeriesLoadingStatus: 'idle',
  countGamesOfSeries: null
};

export const fetchGame = createAsyncThunk('currentGame/fetchGame', (url) => {
  const { request } = useHttp();
  return request(url);
});

export const fetchAchievements = createAsyncThunk('currentGame/fetchAchievements', (url) => {
  const { request } = useHttp();
  return request(url);
});

export const fetchAdditions = createAsyncThunk('currentGame/fetchAdditions', (url) => {
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
      state.gamesOfSeries = [];
      state.countGamesOfSeries = null;
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
        state.gamesOfSeries = action.payload.results;
        state.countGamesOfSeries = action.payload.count;
        state.gamesOfSeriesLoadingStatus = 'idle';
      })
      .addCase(fetchGameSeries.rejected, (state) => {
        state.gamesOfSeriesLoadingStatus = 'error';
      })
      .addCase(fetchAdditions.pending, (state) => {
        state.achievementsLoadingStatus = 'loading';
      })
      .addCase(fetchAdditions.fulfilled, (state, action) => {
        state.achievementsLoadingStatus = 'idle';
        state.additions = action.payload.results;
      })
      .addCase(fetchAdditions.rejected, (state) => {
        state.achievementsLoadingStatus = 'error';
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
  gameSeriesReset,
  additionsReset,
} = actions;
