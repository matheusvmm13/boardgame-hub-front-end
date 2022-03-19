import { AnyAction } from "redux";
import {
  anyActionInterface,
  loadMatchesInfoInterface,
} from "../../../utils/types/actionsInterface";
import { MatchInterface } from "../../../utils/types/matchInterface";
import actionsType from "../../actions/actionsType";

const matchInfoReducer = (
  currentState: MatchInterface | {} = {},
  action: anyActionInterface | loadMatchesInfoInterface | AnyAction = {}
) => {
  let newMatch: MatchInterface | {} = {};

  switch (action.type) {
    case actionsType.loadMatchesInfo:
      newMatch = { ...(action as loadMatchesInfoInterface).match };
      break;

    default:
      newMatch = { ...currentState };
      break;
  }
  return newMatch;
};

export default matchInfoReducer;
