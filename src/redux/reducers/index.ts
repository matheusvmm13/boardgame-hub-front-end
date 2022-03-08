import { combineReducers } from "redux";
import matchReducer from "./matchReducer";

export const rootReducer = combineReducers({
  matches: matchReducer,
});
