import { FILTER_BY_CATEGORY } from '../actions/index';

const INITIAL_STATE = {
  selectedCategory: '',
};

const filterByCategory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default filterByCategory;
