import { getbyingredient } from '../services/theMealDBAPI';
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

export default function fecthThemealAPI(searchSetting) {
  console.log('here fecthThemealAPI', searchSetting);
  requestThemealAPI();
  return (dispatch, state) => {
    dispatch(requestThemealAPI());
    return getbyingredient().then(
      (data) => dispatch(requestThemealAPISuccess(data)),
      (error) => dispatch(receiveThemealAPIFailure(error.message)),
    );
  };
}
