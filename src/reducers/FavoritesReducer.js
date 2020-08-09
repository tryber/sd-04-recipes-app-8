import {
  REQUEST_FAVORITE_FETCHING,
  RECEIVE_FAVORITE_FETCHING_SUCCESS,
} from '../actions/favoriteAction';

const initialState = {
  favoriteListFetching: false,
};

export default (state = initialState, { type, payload }) => {
  console.log('Action Favorites Reducer', type, payload);
  switch (type) {
    case REQUEST_FAVORITE_FETCHING:
      return { favoriteListFetching: true };
    case RECEIVE_FAVORITE_FETCHING_SUCCESS:
      return { favoriteListFetching: false };
    default:
      return state;
  }
};
