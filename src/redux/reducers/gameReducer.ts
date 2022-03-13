import {
  addGameInterface,
  anyActionInterface,
} from "../../utils/types/actionsInterface";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import actionsType from "../actions/actionsType";

const gameReducer = (
  state = {} as BoardgameInterface,
  action: anyActionInterface | addGameInterface = {}
) => {
  let newBoardgames: BoardgameInterface | string;

  switch (action.type) {
    case actionsType.addGame:
      newBoardgames = (action as addGameInterface).boardgame;
      break;

    default:
      newBoardgames = { ...state };
      break;
  }
  return newBoardgames;
};

export default gameReducer;
