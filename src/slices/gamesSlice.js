/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../hooks/http.hook';

const initialState = {
  games: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.gamesLoadingStatus = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.gamesLoadingStatus = 'idle';
      })
      .addCase(fetchGames.rejected, (state) => {
        state.gamesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

// eslint-disable-next-line no-unused-vars
const { actions, reducer } = gamesSlice;

export default reducer;
