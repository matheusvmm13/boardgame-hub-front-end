import { combineReducers } from "redux";
import store from "../store";
import boardgameReducer from "./boardgameReducer";
import gameReducer from "./gameReducer";
import matchReducer from "./matchReducer";

export const rootReducer = combineReducers({
  matches: matchReducer,
  boardGames: boardgameReducer,
  games: gameReducer,
});

export type RootState = ReturnType<typeof store.getState>;
