import { combineReducers } from 'redux';

import searchBar from './searchBar';
import saveEmail from './saveEmail';

const rootReducer = combineReducers({ searchBar, saveEmail });

export default rootReducer;
