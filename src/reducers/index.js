import { combineReducers } from 'redux';
import ThemealDB from '../reducers/ThemealDB';
import searchBar from './searchBar';
import saveEmail from './saveEmail';
import pageTypeReducer from './pageType';

const rootReducer = combineReducers({
  searchBar,
  saveEmail,
  ThemealDB,
  pageTypeReducer,
});

export default rootReducer;
