/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../hooks/http.hook';

const initialState = {
  screenshots: null,
  screenshotsLoadingStatus: 'idle',
};

export const fetchScreenshots = createAsyncThunk('screenshots/fetchScreenshots', (url) => {
  const { request } = useHttp();
  return request(url);
});

const screenshotsSlice = createSlice({
  name: 'screenshots',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScreenshots.pending, (state) => {
        state.screenshotsLoadingStatus = 'loading';
      })
      .addCase(fetchScreenshots.fulfilled, (state, action) => {
        state.screenshotsLoadingStatus = 'idle';
        state.screenshots = action.payload;
      })
      .addCase(fetchScreenshots.rejected, (state) => {
        state.screenshotsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = screenshotsSlice;
export default reducer;
export const {
  screenshotsReset,
} = actions;
