import {
  REQUEST_DETAIL_RECOMAND_API,
  RECEIVE_DETAIL_RECOMAND_API_SUCCESS,
  RECEIVE_DETAIL_RECOMAND_API_FAILURE,
} from '../actions/detailActionsRecomand';
import {
  REQUEST_DETAIL_ID_API,
  RECEIVE_DETAIL_ID_API_SUCCESS,
  RECEIVE_DETAIL_ID_API_FAILURE,
} from '../actions/detailActionsId';

const initialState = {
  isFetchingIdDetail: false,
  id: [],
  recomendation: [],
  error_id: '',
  error_recomendation: '',
};

export default (state = initialState, { type, payload }) => {
  console.log('Action', type, payload);
  switch (type) {
    case REQUEST_DETAIL_ID_API:
      return { ...state, isFetchingIdDetail: true };
    case REQUEST_DETAIL_RECOMAND_API:
      return { ...state, isFetchingRecomandDetail: true };
    case RECEIVE_DETAIL_RECOMAND_API_SUCCESS:
      return {
        ...state,
        isFetchingRecomandDetail: false,
        recomendation: payload[Object.keys(payload)],
      };
    case RECEIVE_DETAIL_RECOMAND_API_FAILURE:
      return {
        ...state,
        isFetchingRecomandDetail: false,
        error_recomendation: payload,
      };
    case RECEIVE_DETAIL_ID_API_SUCCESS:
      return {
        ...state,
        isFetchingIdDetail: false,
        id: payload[Object.keys(payload)],
      };
    case RECEIVE_DETAIL_ID_API_FAILURE:
      return {
        ...state,
        isFetchingIdDetail: false,
        error_id: payload,
      };
    default:
      return state;
  }
};
