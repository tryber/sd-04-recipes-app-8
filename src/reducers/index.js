import { combineReducers } from 'redux';
import ThemealDB from '../reducers/ThemealDB';
import searchBar from './searchBar';
import saveEmail from './saveEmail';
import updateLocation from './saveLocation';
import CategoriesReducer from '../reducers/CategoriesReducer';
import startRecipe from './startRecipe';
import DetailReducer from '../reducers/DetailReducer';

const rootReducer = combineReducers({
  searchBar,
  saveEmail,
  ThemealDB,
  updateLocation,
  CategoriesReducer,
  startRecipe,
  DetailReducer,
});

export default rootReducer;
