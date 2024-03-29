/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useFetch from '../../hooks/useFetch';
import { IAchievement, IAchievementResponse, IGame, Loading } from '../../types';
import rawgService from '../../services/RAWG';


export type CurrentGameState = {
  currentGame: null | IGame,
  currentGameLoadingStatus: Loading,
  screenshots: [],
  screenshotsLoadingStatus: Loading,
  trailers: [],
  trailersLoadingStatus: string,
  achievements: IAchievement[],
  achievementsLoadingStatus: Loading,
  nextAchievementsPage: null | string,
  additions: [],
  additionsLoadingStatus: Loading,
  gamesOfSeries: [],
  gamesOfSeriesLoadingStatus: Loading
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
  additions: [],
  additionsLoadingStatus: 'idle',
  gamesOfSeries: [],
  gamesOfSeriesLoadingStatus: 'idle',
};

export const fetchGame = createAsyncThunk('currentGame/fetchGame', async (id: string) => {
  const response = await rawgService.getGame(id);
  return response;
});

export const fetchScreenshots = createAsyncThunk('currentGame/fetchScreenshots', async (id: string) => {
  const response = await rawgService.getGameScreenshots(id);
  return response;
});

// export const fetchTrailes = createAsyncThunk('currentGame/fetchTrailes', async(id: string) => {
//   const response = await rawgService.getGameTrailers(id);
//   return response;
// });

export const fetchAchievements = createAsyncThunk('currentGame/fetchAchievements', async (id: string) => {
  const response = await rawgService.getGameAchievements(id);
  return response;
});

export const fetchAdditions = createAsyncThunk('currentGame/fetchAdditions', async(id: string) => {
  const response = await rawgService.getGameAdditions(id);
  return response;
});

export const fetchGameSeries = createAsyncThunk('currentGame/fetchGameSeries', async(id: string) => {
  const response = await rawgService.getListOfGamesSeries(id);
  return response;
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
    nextAchievements: (state, action) => {
      state.nextAchievementsPage = action.payload;
    },
    resetCurrentGame: (state) => {
      state.currentGame = null;
      state.achievements = [];
      state.additions = [];
      state.gamesOfSeries = []
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
      // .addCase(fetchTrailes.pending, (state) => {
      //   state.trailersLoadingStatus = 'loading';
      // })
      // .addCase(fetchTrailes.fulfilled, (state, action) => {
      //   state.trailersLoadingStatus = 'idle';
      //   state.trailers = action.payload.results;
      // })
      // .addCase(fetchTrailes.rejected, (state) => {
      //   state.trailersLoadingStatus = 'error';
      // })
      .addCase(fetchAchievements.pending, (state) => {
        state.achievementsLoadingStatus = 'loading';
      })
      .addCase(fetchAchievements.fulfilled, (state, action: PayloadAction<IAchievementResponse>) => {
        state.achievementsLoadingStatus = 'idle';
        state.achievements.push(...action.payload.results);
        state.nextAchievementsPage = action.payload.next;
      })
      .addCase(fetchAchievements.rejected, (state) => {
        state.achievementsLoadingStatus = 'error';
      })
      .addCase(fetchGameSeries.pending, (state) => {
        state.gamesOfSeriesLoadingStatus = 'loading';
      })
      .addCase(fetchGameSeries.fulfilled, (state, action) => {
        state.gamesOfSeries = action.payload.results;
        state.gamesOfSeriesLoadingStatus = 'idle';
      })
      .addCase(fetchGameSeries.rejected, (state) => {
        state.gamesOfSeriesLoadingStatus = 'error';
      })
      .addCase(fetchAdditions.pending, (state) => {
        state.additionsLoadingStatus = 'loading';
      })
      .addCase(fetchAdditions.fulfilled, (state, action) => {
        state.additionsLoadingStatus = 'idle';
        state.additions = action.payload.results;
      })
      .addCase(fetchAdditions.rejected, (state) => {
        state.additionsLoadingStatus = 'error';
      })
  },
});

const { actions, reducer } = currentGameSlice;

export default reducer;
export const {
  achievementsFetching,
  achievementsFetched,
  achievementsFetchingError,
  nextAchievements,
  resetCurrentGame
} = actions;
