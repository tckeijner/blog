import { combineReducers } from 'redux';
import posts from '../Posts/PostsSlice';
import authentication from '../webapi/authSlice';

export const rootReducer = combineReducers({
  posts,
  authentication,
});

export type AppState = ReturnType<typeof rootReducer>;