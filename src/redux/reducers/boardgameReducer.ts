import { AnyAction } from "redux";
import {
  anyActionInterface,
  loadGamesInterface,
  loadMyGamesInterface,
} from "../../utils/types/actionsInterface";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import actionsType from "../actions/actionsType";

const boardgameReducer = (
  boardgames: BoardgameInterface[] = [],
  action: anyActionInterface | loadGamesInterface | AnyAction = {}
) => {
  let newBoardgames: BoardgameInterface[];

  switch (action.type) {
    case actionsType.loadGames:
      newBoardgames = [...(action as loadGamesInterface).boardgame];
      break;

    case actionsType.loadMyGames:
      newBoardgames = [...(action as loadMyGamesInterface).boardgame];
      break;

    default:
      newBoardgames = [...boardgames];
      break;
  }
  return newBoardgames;
};

export default boardgameReducer;
