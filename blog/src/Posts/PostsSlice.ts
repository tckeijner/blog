import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { AppState } from '../state/reducers';
import { addPost } from '../webapi/posts';

export interface BlogPost {
  title: string;
  content: string;
  dateTime?: Date;
}

export interface PostsState {
  publishedPosts: Array<BlogPost>;
  draftPosts: Array<BlogPost>;
  currentPost: BlogPost;
}

const initialState: PostsState = {
  publishedPosts: [],
  draftPosts: [],
  currentPost: {
    title: '',
    content: '',
  }
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addDraft: (state, action: PayloadAction<BlogPost>) => ({
      ...state,
      draftPosts: state.draftPosts.concat(action.payload),
    }),
    removePublishedPost: (state, action: PayloadAction<BlogPost>) => ({
      ...state,
      publishedPosts: state.publishedPosts.filter((post: BlogPost) =>
        post.dateTime !== action.payload.dateTime)
    }),
    removeDraftPost: (state, action: PayloadAction<BlogPost>) => ({
      ...state,
      draftPosts: state.draftPosts.filter((post: BlogPost) =>
        post.dateTime !== action.payload.dateTime)
    }),
    updateTitle: (state, action: PayloadAction<string>) => ({
      ...state,
      title: action.payload
    }),
    updateContent: (state, action: PayloadAction<string>) => ({
      ...state,
      content: action.payload
    }),
    clearPost: (state) => ({
      ...state,
      title: '',
      content: '',
      dateTime: null,
    })
  }
});

export const saveDraft = createAsyncThunk('posts/saveDraft', async (post: BlogPost) => {
  const authenticationToken = useSelector((state: AppState) => state.authentication.authenticationToken);
  if (authenticationToken) {
    const response = await addPost({ authenticationToken, post });
    console.log(response);
  }
});

export const {
  addDraft,
  removePublishedPost,
  removeDraftPost,
  updateTitle,
  updateContent,
  clearPost,
} = postsSlice.actions;

export default postsSlice.reducer;