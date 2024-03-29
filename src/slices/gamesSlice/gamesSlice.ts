/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { GamesAction, Result } from "../../types";
import rawgService from '../../services/RAWG';

export type GamesState = {
  games: Result[],
  nextPage: null | string,
  gamesLoadingStatus: string,
};

const initialState: GamesState = {
  games: [],
  nextPage: null,
  gamesLoadingStatus: 'idle',
};

export const fetchGames = createAsyncThunk('games/fetchGames', async (url?: string) => {
  const response = await rawgService.getGameList(url);
  return response;
});

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    resetGames: (state) => {
      state.games = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.gamesLoadingStatus = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action: PayloadAction<GamesAction>) => {
        state.gamesLoadingStatus = 'idle';
        state.games.push(...action.payload.results);
        state.nextPage = action.payload.next;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.gamesLoadingStatus = 'error';
      })
      .addDefaultCase(() => { });
  },
});


const { actions, reducer } = gamesSlice;
export const { resetGames } = actions;
export default reducer;
