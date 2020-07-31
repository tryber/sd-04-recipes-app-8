import {
  REQUEST_THEMEALAPI,
  RECEIVE_THEMEALAPI_SUCCESS,
  RECEIVE_THEMEALAPI_FAILURE,
} from '../types/Themealdb';

const initialState = {
  isFetching: false,
  recipes: {
    results: {},
  },
  error: '',
};

export default (state = initialState, { type, payload }) => {
  console.log('Action', type, payload )
  switch (type) {
    case REQUEST_THEMEALAPI:
      return { ...state, isFetching: true };
    case RECEIVE_THEMEALAPI_SUCCESS:
      return {
        isFetching: false,
        recipes: 
          payload,
      };
    case RECEIVE_THEMEALAPI_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};
