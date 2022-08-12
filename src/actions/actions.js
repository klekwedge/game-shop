export const gamesFetching = () => ({
  type: 'GAMES_FETCHING',
});

export const gamesFetched = (games) => ({
  type: 'GAMES_FETCHED',
  payload: games,
});

export const gamesFetchingError = () => ({
  type: 'GAMES_FETCHING_ERROR',
});

export const currentGameFetching = () => ({
  type: 'CURRENT_GAME_FETCHING',
});

export const currentGameFetched = (game) => ({
  type: 'CURRENT_GAME_FETCHED',
  payload: game,
});

export const currentGameFetchingError = () => ({
  type: 'CURRENT_GAME_ERROR',
});

export const currentGameReset = () => ({
  type: 'CURRENT_GAME_RESET',
});

export const gameSeriesFetching = () => ({
  type: 'GAME_SERIES_FETCHING',
});

export const gameSeriesFetched = (games) => ({
  type: 'GAME_SERIES_FETCHED',
  payload: games,
});

export const gameSeriesFetchingError = () => ({
  type: 'GAME_SERIES_ERROR',
});

export const gameSeriesReset = () => ({
  type: 'GAME_SERIES_RESET',
});

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
