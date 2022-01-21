import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../Posts/PostsSlice'
import newPostReducer from '../Edit/NewPostSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    newPost: newPostReducer,
  },
});

export default store;