import { CHANGE_VISIBILITY } from '../actions/index';

const INITIAL_STATE = {
  isVisible: false,
};

const searchBar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};

export default searchBar;
