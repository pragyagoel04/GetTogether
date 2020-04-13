import {combineReducers} from 'redux';
import userReducer from './userReducer';
import * as storage from 'redux-storage';

export default storage.reducer(combineReducers({user: userReducer}));
