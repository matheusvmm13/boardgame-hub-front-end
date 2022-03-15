import { AnyAction } from "redux";
import {
  anyActionInterface,
  loadGamesInterface,
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

    default:
      newBoardgames = [...boardgames];
      break;
  }
  return newBoardgames;
};

export default boardgameReducer;
