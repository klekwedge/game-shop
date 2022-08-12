/* eslint-disable default-param-last */
const initialState = {
  genres: null,
  genresLoadingStatus: 'idle',
  currentGenre: null,
  currentGenreLoadingStatus: 'idle',
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
    case 'CURRENT_GENRE_FETCHING':
      return {
        ...state,
        currentGenreLoadingStatus: 'loading',
      };
    case 'CURRENT_GENRE_FETCHED':
      return {
        ...state,
        currentGenre: action.payload,
        currentGenreLoadingStatus: 'idle',
      };
    case 'CURRENT_GENRE_FETCHING_ERROR':
      return {
        ...state,
        currentGenreLoadingStatus: 'error',
      };
    default:
      return state;
  }
};

export default genres;
