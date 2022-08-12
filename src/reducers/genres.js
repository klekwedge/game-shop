/* eslint-disable default-param-last */
const initialState = {
  genres: null,
  genresLoadingStatus: 'idle',
};

const genres = (state = initialState, action) => {
  switch (action.type) {
    case 'GENRES_FETCHING':
      return {
        ...state,
        genresLoadingStatus: 'loading',
      };
    case 'GENRES_FETCHED':
      return {
        ...state,
        genres: action.payload,
        genresLoadingStatus: 'idle',
      };
    case 'GENRES_ERROR':
      return {
        ...state,
        genresLoadingStatus: 'error',
      };
    case 'GENRES_RESET':
      return {
        ...state,
        genres: null,
      };
    default:
      return state;
  }
};

export default genres;
