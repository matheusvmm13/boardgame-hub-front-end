import { combineReducers } from "redux";
import matchReducer from "./matchReducer";

export const rootReducer = combineReducers({
  matches: matchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
