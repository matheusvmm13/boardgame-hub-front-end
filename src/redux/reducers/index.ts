import { combineReducers } from "redux";
import store from "../store";
import boardgameReducer from "./boardgameReducer";
import gameReducer from "./gameReducer";
import matchInfoReducer from "./matchInfoReducer/matchInfoReducer";
import matchReducer from "./matchReducer";
import userReducer from "./userReducer/userReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  matches: matchReducer,
  matchInfo: matchInfoReducer,
  boardGames: boardgameReducer,
  games: gameReducer,
});

export type RootState = ReturnType<typeof store.getState>;
