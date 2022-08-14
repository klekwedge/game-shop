/* eslint-disable default-param-last */
// const initialState = {
//   games: null,
//   gamesLoadingStatus: 'idle',
//   currentGame: null,
//   currentGameLoadingStatus: 'idle',
//   gamesOfSeries: null,
//   gamesOfSeriesLoadingStatus: 'idle',
// };

// const games = (state = initialState, action) => {
//   switch (action.type) {
//     case 'GAMES_FETCHING':
//       return {
//         ...state,
//         gamesLoadingStatus: 'loading',
//       };
//     case 'GAMES_FETCHED':
//       return {
//         ...state,
//         games: action.payload,
//         gamesLoadingStatus: 'idle',
//       };
//     case 'GAMES_FETCHING_ERROR':
//       return {
//         ...state,
//         gamesLoadingStatus: 'error',
//       };
//     case 'CURRENT_GAME_FETCHING':
//       return {
//         ...state,
//         currentGameLoadingStatus: 'loading',
//       };
//     case 'CURRENT_GAME_FETCHED':
//       return {
//         ...state,
//         currentGame: action.payload,
//         currentGameLoadingStatus: 'idle',
//       };
//     case 'CURRENT_GAME_ERROR':
//       return {
//         ...state,
//         currentGameLoadingStatus: 'error',
//       };
//     case 'CURRENT_GAME_RESET':
//       return {
//         ...state,
//         currentGame: null,
//       };
//     case 'GAME_SERIES_FETCHING':
//       return {
//         ...state,
//         gamesOfSeriesLoadingStatus: 'loading',
//       };
//     case 'GAME_SERIES_FETCHED':
//       return {
//         ...state,
//         gamesOfSeries: action.payload,
//         gamesOfSeriesLoadingStatus: 'idle',
//       };
//     case 'GAME_SERIES_ERROR':
//       return {
//         ...state,
//         gamesOfSeriesLoadingStatus: 'error',
//       };
//     case 'GAME_SERIES_RESET':
//       return {
//         ...state,
//         gamesOfSeries: null,
//       };

//     default:
//       return state;
//   }
// };

// export default games;
