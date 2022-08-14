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

export const moviesFetching = () => ({
  type: 'MOVIES_FETCHING',
});

export const moviesFetched = (movies) => ({
  type: 'MOVIES_FETCHED',
  payload: movies,
});

export const moviesFetchingError = () => ({
  type: 'MOVIES_FETCHING_ERROR',
});

export const moviesReset = () => ({
  type: 'MOVIES_RESET',
});

// export const genresFetching = () => ({
//   type: 'GENRES_FETCHING',
// });

// export const genresFetched = (genres) => ({
//   type: 'GENRES_FETCHED',
//   payload: genres,
// });

// export const genresFetchingError = () => ({
//   type: 'GENRES_FETCHING_ERROR',
// });

// export const genresReset = () => ({
//   type: 'GENRES_RESET',
// });

// export const currentGenreFetching = () => ({
//   type: 'CURRENT_GENRE_FETCHING',
// });

// export const currentGenreFetched = (genre) => ({
//   type: 'CURRENT_GENRE_FETCHED',
//   payload: genre,
// });

// export const currentGenreFetchingError = () => ({
//   type: 'CURRENT_GENRE_FETCHING_ERROR',
// });
