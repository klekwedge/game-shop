/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../hooks/http.hook';

const initialState = {
  games: [],
  nextPage: null,
  gamesLoadingStatus: 'idle',
};

export const fetchGames = createAsyncThunk('games/fetchGames', (url) => {
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
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.gamesLoadingStatus = 'idle';
        state.games.push(...action.payload.results);
        state.nextPage = action.payload.next;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.gamesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

// eslint-disable-next-line no-unused-vars
const { actions, reducer } = gamesSlice;
export const { resetGames } = actions;
export default reducer;
