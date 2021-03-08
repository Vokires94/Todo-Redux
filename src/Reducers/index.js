import {combineReducers} from 'redux';
import todo from './todo';
import  visibilityfilter from './visibilityfilter';

export default combineReducers({todo, visibilityfilter}); 