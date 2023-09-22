import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import newsReducer from "../features/newsSlice"

export const store =configureStore({
  reducer:{
    auth:authReducer,
    api:newsReducer
  },
  devTools:process.env.NODE_DEV !== "production",
})
