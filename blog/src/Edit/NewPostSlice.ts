import { createSlice } from "@reduxjs/toolkit";

export const newPostSlice = createSlice({
  name: 'newPost',
  initialState: {
    title: '',
    content: '',
    dateTime: null,
  },
  reducers: {
    updateTitle: (state, action) => ({
      ...state,
      title: action.payload
    }),
    updateContent: (state, action) => ({
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
})

export const { updateTitle, updateContent, clearPost } = newPostSlice.actions;

export default newPostSlice.reducer;