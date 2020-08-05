import { combineReducers } from 'redux';
import ThemealDB from '../reducers/ThemealDB';
import searchBar from './searchBar';
import saveEmail from './saveEmail';
import updateLocation from './saveLocation';
import filterByCategory from './categoryFilter';
import CategoriesReducer from '../reducers/CategoriesReducer';

const rootReducer = combineReducers({
  searchBar,
  saveEmail,
  ThemealDB,
  updateLocation,
  filterByCategory,
  CategoriesReducer,
});

export default rootReducer;
