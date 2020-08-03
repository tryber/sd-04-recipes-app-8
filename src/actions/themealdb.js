import { useSelector } from 'react-redux';
import getRecipesAPI from '../services/theMealDBAPI';

export const REQUEST_THEMEALAPI = 'REQUEST_THEMEALAPI';
export const RECEIVE_THEMEALAPI_SUCCESS = 'RECEIVE_THEMEALAPI_SUCCESS';
export const RECEIVE_THEMEALAPI_FAILURE = 'RECEIVE_THEMEALAPI_FAILURE';
export const REQUEST_RESET_FETCH_STATE = 'REQUEST_RESET_FETCH_STATE';
export const REQUEST_RESET_RECIPES_STATE = 'REQUEST_RESET_RECIPES_STATE';

export const requestResetAPI = () => ({
  type: REQUEST_RESET_FETCH_STATE,
});

export const requestResetRecipes = () => ({
  type: REQUEST_RESET_RECIPES_STATE,
});

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

function callAPI(searchSetting, typepage) {
  const pageType = typepage; // Drink or meal depends of the current page
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

export default function FetchThemealAPI(searchSetting) {
  requestThemealAPI();
  return (dispatch, state) => {
    const { pageTypeReducer: { type: typepage } } = state();
    console.log('typepage', typepage);
    dispatch(requestThemealAPI());
    return callAPI(searchSetting, typepage).then(
      (data) => dispatch(requestThemealAPISuccess(data)),
      (error) => dispatch(receiveThemealAPIFailure(error.message)),
    );
  };
}
