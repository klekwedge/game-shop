/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trailers: null,
  trailersLoadingStatus: 'idle',
};

const trailersSlice = createSlice({
  name: 'trailers',
  initialState,
  reducers: {
    trailersFetching: (state) => {
      state.trailersLoadingStatus = 'loading';
    },
    trailersFetched: (state, action) => {
      state.trailersLoadingStatus = 'idle';
      state.trailers = action.payload;
    },
    trailersFetchingError: (state) => {
      state.trailersLoadingStatus = 'error';
    },
    trailersReset: (state) => {
      state.trailers = null;
    },
  },
});

const { actions, reducer } = trailersSlice;

export default reducer;

export const {
  trailersFetching, trailersFetched, trailersFetchingError, trailersReset,
} = actions;
