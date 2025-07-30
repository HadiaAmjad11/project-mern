import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,  // use lowercase here
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    SignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    SignInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export actions with exact matching names you want to import
export const { signinStart, SignInSuccess, SignInFailure } = userSlice.actions;

export default userSlice.reducer;
