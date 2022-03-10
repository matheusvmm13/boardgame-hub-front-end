import { combineReducers } from "redux";
import store from "../store";
import matchReducer from "./matchReducer";

export const rootReducer = combineReducers({
  matches: matchReducer,
});

export type RootState = ReturnType<typeof store.getState>;
