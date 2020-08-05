import { combineReducers } from 'redux';
import ThemealDB from '../reducers/ThemealDB';
import searchBar from './searchBar';
import saveEmail from './saveEmail';
import updateLocation from './saveLocation';
import CategoriesReducer from '../reducers/CategoriesReducer';

const rootReducer = combineReducers({
  searchBar,
  saveEmail,
  ThemealDB,
  updateLocation,
  CategoriesReducer,
});

export default rootReducer;
