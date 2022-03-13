import { AnyAction } from "redux";
import {
  anyActionInterface,
  createMatchesInterface,
  deleteMatchesInterface,
  loadMatchesInterface,
  loadMyMatchesInterface,
} from "../../utils/types/actionsInterface";
import { MatchInterface } from "../../utils/types/matchInterface";
import actionsType from "../actions/actionsType";

const matchReducer = (
  state: MatchInterface[] = [],
  action:
    | anyActionInterface
    | loadMatchesInterface
    | loadMyMatchesInterface
    | deleteMatchesInterface
    | createMatchesInterface
    | AnyAction = {}
) => {
  let newMatch: MatchInterface[];

  switch (action.type) {
    case actionsType.loadMatches:
      newMatch = [...(action as loadMatchesInterface).match];
      break;

    case actionsType.loadMyMatches:
      newMatch = [...(action as loadMyMatchesInterface).match];
      break;

    case actionsType.deleteMatches:
      newMatch = state.filter(
        (match) => match.id !== (action as deleteMatchesInterface).id
      );
      break;

    case actionsType.createMatches:
      newMatch = [...state, (action as createMatchesInterface).match];
      break;

    default:
      newMatch = [...state];
      break;
  }
  return newMatch;
};

export default matchReducer;
