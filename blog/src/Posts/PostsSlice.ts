import { createSlice } from '@reduxjs/toolkit';

export interface BlogPost {
  title: string;
  content: string;
  dateTime: Date;
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    publishedPosts: [
      {
        title: 'Post one',
        content: 'Content content content content content content content content content content content content content content',
        dateTime: new Date()
      },
      {
        title: 'Post two',
        content: 'Content content content content content content content content content content content content content content',
        dateTime: new Date(),
      },
    ],
    draftPosts: [],
  },
  reducers: {
    addPublishedPosts: (state, action) => ({
      ...state,
      publishedPosts: state.publishedPosts.concat(action.payload),
    }),
    addDraft: (state, action) => ({
      ...state,
      draftPosts: state.draftPosts.concat(action.payload),
    }),
    removePublishedPost: (state, action) => ({
      ...state,
      publishedPosts: state.publishedPosts.filter((post: BlogPost) =>
        post.dateTime !== action.payload)
    }),
    removeDraftPost: (state, action) => ({
      ...state,
      draftPosts: state.draftPosts.filter((post: BlogPost) =>
        post.dateTime !== action.payload)
    })
  }
});

export const { addPublishedPosts, removePublishedPost, addDraft, removeDraftPost } = postsSlice.actions;

export default postsSlice.reducer;