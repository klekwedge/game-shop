/* eslint-disable default-param-last */
const initialState = {
  screenshots: null,
  screenshotsLoadingStatus: 'idle',
};

const screenshots = (state = initialState, action) => {
  switch (action.type) {
    case 'SCREENSHOTS_FETCHING':
      return {
        ...state,
        screenshotsLoadingStatus: 'loading',
      };
    case 'SCREENSHOTS_FETCHED':
      return {
        ...state,
        screenshots: action.payload,
        screenshotsLoadingStatus: 'idle',
      };
    case 'SCREENSHOTS_FETCHING_ERROR':
      return {
        ...state,
        screenshotsLoadingStatus: 'error',
      };
    case 'SCREENSHOTS_RESET':
      return {
        ...state,
        screenshots: null,
      };
    default:
      return state;
  }
};

export default screenshots;
