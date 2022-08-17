/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../hooks/http.hook';

const initialState = {
  genres: null,
  genresLoadingStatus: 'idle',
  currentGenre: null,
  currentGenreLoadingStatus: 'idle',
};

export const fetchGenres = createAsyncThunk('genres/fetchGenres', (url) => {
  const { request } = useHttp();
  return request(url);
});

export const fetchCurrentGenre = createAsyncThunk('genres/fetchCurrentGenre', (url) => {
  const { request } = useHttp();
  return request(url);
});

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.genresLoadingStatus = 'loading';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.genresLoadingStatus = 'idle';
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.genresLoadingStatus = 'error';
      })
      .addCase(fetchCurrentGenre.pending, (state) => {
        state.currentGenreLoadingStatus = 'loading';
      })
      .addCase(fetchCurrentGenre.fulfilled, (state, action) => {
        state.currentGenre = action.payload;
        state.currentGenreLoadingStatus = 'idle';
      })
      .addCase(fetchCurrentGenre.rejected, (state) => {
        state.currentGenreLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

// eslint-disable-next-line no-unused-vars
const { actions, reducer } = genresSlice;
export default reducer;
