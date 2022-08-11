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
