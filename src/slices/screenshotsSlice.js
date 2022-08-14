/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screenshots: null,
  screenshotsLoadingStatus: 'idle',
};

const screenshotsSlice = createSlice({
  name: 'screenshots',
  initialState,
  reducers: {
    screenshotsFetching: (state) => {
      state.screenshotsLoadingStatus = 'loading';
    },
    screenshotsFetched: (state, action) => {
      state.screenshotsLoadingStatus = 'idle';
      state.screenshots = action.payload;
    },
    screenshotsFetchingError: (state) => {
      state.screenshotsLoadingStatus = 'error';
    },
    screenshotsReset: (state) => {
      state.screenshots = null;
    },
  },
});

const { actions, reducer } = screenshotsSlice;
export default reducer;
export const {
  screenshotsFetching,
  screenshotsFetched,
  screenshotsFetchingError,
  screenshotsReset,
} = actions;
