import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestAuthToken } from './authentication';
import { AuthenticationRequest } from './models';

export interface AuthenticationState {
  authenticationToken: string | null;
  status: 'logged out' | 'authenticating' | 'authenticated' | 'failed'
}

const initialState: AuthenticationState = {
  authenticationToken: null,
  status: 'logged out'
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logoutUser: (state) => ({
      ...state,
      authenticationToken: null
    })
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => ({
        ...state,
        status: 'authenticating'
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        authenticationToken: action.payload,
        status: 'authenticated'
      }))
      .addCase(loginUser.rejected, (state) => ({
        ...state,
        status: 'failed'
      }));
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (request: AuthenticationRequest) =>
  await requestAuthToken(request)
);

export const { logoutUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;