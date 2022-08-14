/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: null,
  moviesLoadingStatus: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    moviesFetching: (state) => {
      state.moviesLoadingStatus = 'loading';
    },
    moviesFetched: (state, action) => {
      state.moviesLoadingStatus = 'idle';
      state.movies = action.payload;
    },
    moviesFetchingError: (state) => {
      state.moviesLoadingStatus = 'error';
    },
    moviesReset: (state) => {
      state.movies = null;
    },
  },
});

const { actions, reducer } = moviesSlice;

export default reducer;

export const {
  moviesFetching, moviesFetched, moviesFetchingError, moviesReset,
} = actions;
