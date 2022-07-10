import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/reducers.redux";

export const store = configureStore({
  reducer: rootReducer,
})
