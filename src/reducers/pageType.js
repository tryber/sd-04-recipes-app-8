import { CHANGE_PAGE_TYPE } from '../actions/index';

const INITIAL_STATE = {
  type: 'themeal',
};

const pageTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_PAGE_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default pageTypeReducer;
