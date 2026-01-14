import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from "../../../types/user.types";

const initialState: User = {
  id: "",
  accessToken: "",
  refreshToken: "",
  email: '',
  name: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      console.log("User added to Redux:", action.payload);
    },
    logout: (state) => {
      state.id = "";
      state.email = "";
      state.name = "";
      state.accessToken = "";
      state.refreshToken = "";
      console.log("User logged out");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;