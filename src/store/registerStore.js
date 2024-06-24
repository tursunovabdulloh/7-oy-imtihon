import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:
    JSON.parse(localStorage.getItem("user")) ||
    "https://accs-market.com/uploads/73254/u29371782.jpg",
  authChange: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.users = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout: (state) => {
      state.users = null;
      localStorage.removeItem("user");
    },
    authChange: (state) => {
      state.authChange = true;
    },
  },
});

export const { login, logout, authChange } = userSlice.actions;
export default userSlice.reducer;
