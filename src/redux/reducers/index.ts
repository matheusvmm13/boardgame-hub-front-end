import { combineReducers } from "redux";
import store from "../store";
import gameReducer from "./gameReducer";
import matchReducer from "./matchReducer";

export const rootReducer = combineReducers({
  matches: matchReducer,
  games: gameReducer,
});

export type RootState = ReturnType<typeof store.getState>;
