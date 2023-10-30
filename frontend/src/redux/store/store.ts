import { apiSlice } from "@/redux/slices/apiSlice";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "../slices/auth/authSlice";
export const store = configureStore({
  reducer: {
    //all reducer goes here
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), //add apislice middleware
  devTools: true,
});
