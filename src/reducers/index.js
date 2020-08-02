import { combineReducers } from 'redux';
import ThemealDB from '../reducers/ThemealDB';
import searchBar from './searchBar';
import saveEmail from './saveEmail';

const rootReducer = combineReducers({ searchBar, saveEmail, ThemealDB });

export default rootReducer;
