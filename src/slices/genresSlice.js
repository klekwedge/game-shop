/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: null,
  genresLoadingStatus: 'idle',
  currentGenre: null,
  currentGenreLoadingStatus: 'idle',
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    genresFetching: (state) => {
      state.genresLoadingStatus = 'loading';
    },
    genresFetched: (state, action) => {
      state.genres = action.payload;
      state.genresLoadingStatus = 'idle';
    },
    genresFetchingError: (state) => {
      state.genresLoadingStatus = 'error';
    },
    genresReset: (state) => {
      state.genres = null;
    },
    currentGenreFetching: (state) => {
      state.currentGenreLoadingStatus = 'loading';
    },
    currentGenreFetched: (state, action) => {
      state.currentGenre = action.payload;
      state.currentGenreLoadingStatus = 'idle';
    },
    currentGenreFetchingError: (state) => {
      state.currentGenreLoadingStatus = 'error';
    },
  },
});

const { actions, reducer } = genresSlice;
export default reducer;
export const {
  genresFetching,
  genresFetched,
  genresFetchingError,
  genresReset,
  currentGenreFetching,
  currentGenreFetched,
  currentGenreFetchingError,
} = actions;
