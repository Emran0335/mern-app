import { configureStore } from "@reduxjs/toolkit";
// import goalReducer from "../features/goals/goalSlice";
import authReducer from "../features/auth/authSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
