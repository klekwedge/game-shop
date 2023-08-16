/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useFetch from '../../hooks/useFetch';
import { IAchievement, IAchievementResponse, IGame } from '../../types';


export type CurrentGameState = {
  currentGame: null | IGame,
  currentGameLoadingStatus: string,
  screenshots: [],
  screenshotsLoadingStatus: string,
  trailers: [],
  trailersLoadingStatus: string,
  achievements: IAchievement[],
  achievementsLoadingStatus: string,
  nextAchievementsPage: null | string,
  achievementsAmount: number,
  additions: [],
  gamesOfSeries: [],
  gamesOfSeriesLoadingStatus: string,
  countGamesOfSeries: null | number
};

const initialState: CurrentGameState = {
  currentGame: null,
  currentGameLoadingStatus: 'idle',
  screenshots: [],
  screenshotsLoadingStatus: 'idle',
  trailers: [],
  trailersLoadingStatus: 'idle',
  achievements: [],
  achievementsLoadingStatus: 'idle',
  nextAchievementsPage: null,
  achievementsAmount: 0,
  additions: [],
  gamesOfSeries: [],
  gamesOfSeriesLoadingStatus: 'idle',
  countGamesOfSeries: null
};

export const fetchGame = createAsyncThunk('currentGame/fetchGame', (url: string) => {
  const { request } = useFetch();
  return request(url);
});

export const fetchScreenshots = createAsyncThunk('currentGame/fetchScreenshots', (url: string) => {
  const { request } = useFetch();
  return request(url);
});

export const fetchTrailes = createAsyncThunk('currentGame/fetchTrailes', (url: string) => {
  const { request } = useFetch();
  return request(url);
});

export const fetchAchievements = createAsyncThunk('currentGame/fetchAchievements', (url: string) => {
  const { request } = useFetch();
  return request(url);
});

export const fetchAdditions = createAsyncThunk('currentGame/fetchAdditions', (url: string) => {
  const { request } = useFetch();
  return request(url);
});

export const fetchGameSeries = createAsyncThunk('currentGame/fetchGameSeries', (url: string) => {
  const { request } = useFetch();
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
      .addCase(fetchScreenshots.pending, (state) => {
        state.screenshotsLoadingStatus = 'loading';
      })
      .addCase(fetchScreenshots.fulfilled, (state, action) => {
        state.screenshotsLoadingStatus = 'idle';
        state.screenshots = action.payload.results;
      })
      .addCase(fetchScreenshots.rejected, (state) => {
        state.screenshotsLoadingStatus = 'error';
      })
      .addCase(fetchTrailes.pending, (state) => {
        state.trailersLoadingStatus = 'loading';
      })
      .addCase(fetchTrailes.fulfilled, (state, action) => {
        state.trailersLoadingStatus = 'idle';
      state.trailers = action.payload.results;
      })
      .addCase(fetchTrailes.rejected, (state) => {
        state.trailersLoadingStatus = 'error';
      })
      .addCase(fetchAchievements.pending, (state) => {
        state.achievementsLoadingStatus = 'loading';
      })
      .addCase(fetchAchievements.fulfilled, (state, action: PayloadAction<IAchievementResponse>) => {
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
      .addDefaultCase(() => { });
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
