import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
// Setup for using react redux toolkit for login/logout authentication
const initialAuthState = {
  token: "",
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
};

const authSlice = createSlice({
  name: "authenticate",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
