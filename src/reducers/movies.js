// /* eslint-disable default-param-last */
// const initialState = {
//   movies: null,
//   moviesLoadingStatus: 'idle',
// };

// const movies = (state = initialState, action) => {
//   switch (action.type) {
//     case 'MOVIES_FETCHING':
//       return {
//         ...state,
//         moviesLoadingStatus: 'loading',
//       };
//     case 'MOVIES_FETCHED':
//       return {
//         ...state,
//         movies: action.payload,
//         moviesLoadingStatus: 'idle',
//       };
//     case 'MOVIES_FETCHING_ERROR':
//       return {
//         ...state,
//         moviesLoadingStatus: 'error',
//       };
//     case 'MOVIES_RESET':
//       return {
//         ...state,
//         movies: null,
//       };
//     default:
//       return state;
//   }
// };

// export default movies;
