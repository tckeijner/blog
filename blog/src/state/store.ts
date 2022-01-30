import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Posts/PostsSlice';
import newPostReducer from '../Edit/NewPostSlice';
import authenticationReducer from '../webapi/authSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    newPost: newPostReducer,
    authentication: authenticationReducer
  },
});

export default store;