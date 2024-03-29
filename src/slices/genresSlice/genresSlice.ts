/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IGenre } from '../../types';
import rawgService from '../../services/RAWG';

type GenresState = {
  genres: IGenre[],
  genresLoadingStatus: string,
  currentGenre: null | IGenre,
  currentGenreLoadingStatus: string,
};

const initialState: GenresState = {
  genres: [],
  genresLoadingStatus: 'idle',
  currentGenre: null,
  currentGenreLoadingStatus: 'idle',
};

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async() => {
  const response = await rawgService.getGenres();
  return response;
});

export const fetchCurrentGenre = createAsyncThunk('genres/fetchCurrentGenre', async (url: string) => {
  const response = await rawgService.getGameList(url);
  return response;
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
        state.genres = action.payload.results;
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
      .addDefaultCase(() => { });
  },
});

const { reducer } = genresSlice;
export default reducer;
