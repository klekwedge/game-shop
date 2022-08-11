/* eslint-disable default-param-last */
const initialState = {
  games: null,
  gamesLoadingStatus: 'idle',
  currentGame: null,
  currentGameLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GAMES_FETCHING':
      return {
        ...state,
        gamesLoadingStatus: 'loading',
      };
    case 'GAMES_FETCHED':
      return {
        ...state,
        games: action.payload,
        gamesLoadingStatus: 'idle',
      };
    case 'GAMES_FETCHING_ERROR':
      return {
        ...state,
        gamesLoadingStatus: 'error',
      };
    case 'CURRENT_GAME_FETCHING':
      return {
        ...state,
        currentGameLoadingStatus: 'loading',
      };
    case 'CURRENT_GAME_FETCHED':
      return {
        ...state,
        currentGame: action.payload,
        currentGameLoadingStatus: 'idle',
      };
    case 'CURRENT_GAME_ERROR':
      return {
        ...state,
        currentGameLoadingStatus: 'error',
      };
    default:
      return state;
  }
};

export default reducer;
