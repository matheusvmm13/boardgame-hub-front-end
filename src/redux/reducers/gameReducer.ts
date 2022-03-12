import {
  addGameInterface,
  anyActionInterface,
} from "../../utils/types/actionsInterface";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import actionsType from "../actions/actionsType";

const gameReducer = (
  state: BoardgameInterface = {
    name: "",
  },
  action: anyActionInterface | addGameInterface = {}
) => {
  let newBoardgames: Partial<BoardgameInterface>;

  switch (action.type) {
    case actionsType.addGame:
      newBoardgames = (action as addGameInterface).name;
      break;

    default:
      newBoardgames = { ...state };
      break;
  }
  return newBoardgames;
};

export default gameReducer;
