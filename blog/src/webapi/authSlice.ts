import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    authenticationToken: null,
  },
  reducers: {
    loginUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    logoutUser: (state) => ({
      ...state,
      authenticationToken: null
    })
  }
});

export const { loginUser, logoutUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;