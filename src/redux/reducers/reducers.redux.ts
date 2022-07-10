import { combineReducers } from "redux";
import { snackbarReducer } from "./snackbarReducer.redux";

export const rootReducer = combineReducers({
  snackbar: snackbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
