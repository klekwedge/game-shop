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
