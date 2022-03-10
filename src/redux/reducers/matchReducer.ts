import { AnyAction } from "redux";
import { MatchInterface } from "../../utils/types/matchInterface";
import actionsType from "../actions/actionsType";

const matchReducer = (state: MatchInterface[] = [], action: AnyAction) => {
  let newMatch: MatchInterface[] | MatchInterface;

  switch (action.type) {
    case actionsType.loadMatches:
      newMatch = [...action.match];
      break;

    case actionsType.deleteMatches:
      newMatch = state.filter((match) => match.id !== action.id);
      break;

    case actionsType.createMatches:
      newMatch = [...state, action.match];
      break;

    default:
      newMatch = [...state];
      break;
  }
  return newMatch;
};

export default matchReducer;
