import { combineReducers } from 'redux';
import newPost from '../Edit/NewPostSlice';
import posts from '../Posts/PostsSlice';
import authentication from '../webapi/authSlice';

export const rootReducer = combineReducers({
  posts,
  newPost,
  authentication,
});

export type AppState = ReturnType<typeof rootReducer>;