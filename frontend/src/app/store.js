import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "../features/goals/goalSlice";

const store = configureStore({
  reducer: {
    goals: goalReducer,
  },
});

export default store;
