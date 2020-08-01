import { getRecipesAPI } from '../services/theMealDBAPI';
export const REQUEST_THEMEALAPI = 'REQUEST_THEMEALAPI';
export const RECEIVE_THEMEALAPI_SUCCESS = 'RECEIVE_THEMEALAPI_SUCCESS';
export const RECEIVE_THEMEALAPI_FAILURE = 'RECEIVE_THEMEALAPI_FAILURE';

const requestThemealAPI = () => ({
  type: REQUEST_THEMEALAPI,
});

const requestThemealAPISuccess = (data) => ({
  type: RECEIVE_THEMEALAPI_SUCCESS,
  payload: data,
});

const receiveThemealAPIFailure = (error) => ({
  type: RECEIVE_THEMEALAPI_FAILURE,
  payload: error,
});

function callAPI(searchSetting) {
  const pageType = 'themeal'; // just change to thecocktail when it is drink page
  let url = '';
  switch (searchSetting.searchOption) {
    case 'ingredient':
      url = `https://www.${pageType}db.com/api/json/v1/1/filter.php?i=${searchSetting.searchedValue}`;
      break;
    case 'name':
      url = `https://www.${pageType}db.com/api/json/v1/1/search.php?s=${searchSetting.searchedValue}`;
      break;
    case 'firstLetter':
      url = `https://www.${pageType}db.com/api/json/v1/1/search.php?f=${searchSetting.searchedValue}`;
      break;
    default:
      url = `https://www.${pageType}db.com/api/json/v1/1/filter.php?i=${searchSetting.searchedValue}`;
  }
  return getRecipesAPI(url);
}

export default function fetchThemealAPI(searchSetting) {
  requestThemealAPI();
  return (dispatch) => {
    dispatch(requestThemealAPI());
    return callAPI(searchSetting).then(
      (data) => dispatch(requestThemealAPISuccess(data)),
      (error) => dispatch(receiveThemealAPIFailure(error.message)),
    );
  };
}
