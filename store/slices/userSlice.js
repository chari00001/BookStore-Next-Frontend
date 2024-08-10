import { createSlice } from "@reduxjs/toolkit";

// store/slices/userSlice.js

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
