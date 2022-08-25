/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useHttp from '../../hooks/http.hook';
import { GamesState, GamesAction } from './gamesSlice.types';

const initialState: GamesState = {
  games: [],
  nextPage: null,
  gamesLoadingStatus: 'idle',
};

export const fetchGames = createAsyncThunk('games/fetchGames', (url: string) => {
  const { request } = useHttp();
  return request(url);
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
