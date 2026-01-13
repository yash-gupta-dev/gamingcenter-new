import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from "../../../types/user.types";

const initialState: User = {
  id: "",
  token: "",
  refreshToken: "",
  email: '',
  name: ''
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state = action.payload;
      console.log("User added to Redux:", action.payload);
    },
    logout: (state) => {
      state = { ...initialState };
      console.log("User logged out");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;