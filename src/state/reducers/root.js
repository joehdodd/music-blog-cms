import { combineReducers } from 'redux';
import auth from './auth';
import posts from './posts';
import spotify from './spotify';

export default combineReducers({
  auth,
  posts,
  spotify,
});
