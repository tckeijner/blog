import { combineReducers } from "redux";
import newPost from '../Edit/NewPostSlice'
import posts from '../Posts/PostsSlice'

export const rootReducer = combineReducers({
  posts,
  newPost,
})

export type AppState = ReturnType<typeof rootReducer>;