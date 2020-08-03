import {
  REQUEST_THEMEALAPI,
  RECEIVE_THEMEALAPI_SUCCESS,
  RECEIVE_THEMEALAPI_FAILURE,
  REQUEST_RESET_FETCH_STATE,
  REQUEST_RESET_RECIPES_STATE,
} from '../types/Themealdb';

const initialState = {
  isFetching: false,
  recipes: [],
  error: '',
};

export default (state = initialState, { type, payload }) => {
  console.log('Action', type, payload);
  switch (type) {
    case REQUEST_RESET_FETCH_STATE:
      return { ...state, isFetching: false };
    case REQUEST_RESET_RECIPES_STATE:
      return { ...state, recipes: [] };
    case REQUEST_THEMEALAPI:
      return { ...state, isFetching: true };
    case RECEIVE_THEMEALAPI_SUCCESS:
      return { ...state, isFetching: false, recipes: payload[Object.keys(payload)] };
    case RECEIVE_THEMEALAPI_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};
