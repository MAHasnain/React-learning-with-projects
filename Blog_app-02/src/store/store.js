import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";

const store = configureStore({
  reducer: {
    reducer: authReducer,
  },
});

export default store;
