export const screenshotsFetching = () => ({
  type: 'SCREENSHOTS_FETCHING',
});

export const screenshotsFetched = (screenshots) => ({
  type: 'SCREENSHOTS_FETCHED',
  payload: screenshots,
});

export const screenshotsFetchingError = () => ({
  type: 'SCREENSHOTS_FETCHING_ERROR',
});

export const screenshotsReset = () => ({
  type: 'SCREENSHOTS_RESET',
});

// export const moviesFetching = () => ({
//   type: 'MOVIES_FETCHING',
// });

// export const moviesFetched = (movies) => ({
//   type: 'MOVIES_FETCHED',
//   payload: movies,
// });

// export const moviesFetchingError = () => ({
//   type: 'MOVIES_FETCHING_ERROR',
// });

// export const moviesReset = () => ({
//   type: 'MOVIES_RESET',
// });
