import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
}

interface ProviderId {
  providerId: string;
}

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  providerId: ProviderId | null;
}
const initialState: AuthState = {
  token: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
  providerId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      console.log("Token added to Redux:", action.payload);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      console.log("User added to Redux:", action.payload);
    },
    setProviderId: (state, action: PayloadAction<ProviderId>) => {
      state.providerId = action.payload;
      console.log("ProviderId added to Redux:", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      console.log("User logged out");
    },
    restoreAuth: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      console.log("Auth restored from storage");
    },
  },
});

export const { addToken, setUser, logout, restoreAuth, setProviderId } = authSlice.actions;

export default authSlice.reducer;