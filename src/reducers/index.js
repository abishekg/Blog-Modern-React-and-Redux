import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';


export default combineReducers({
  posts: postsReducer,
  users: userReducer
});


/**
 * state.pop() -> state.filter(element=>element!=='hi);
 */