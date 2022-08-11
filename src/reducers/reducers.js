/* eslint-disable default-param-last */
const initialState = {
  games: null,
  gamesLoadingStatus: 'idle',
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
    default:
      return state;
  }
};

export default reducer;
