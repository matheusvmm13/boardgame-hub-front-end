import { ActionInterface } from "../../utils/types/actionInterface";
import { MatchInterface } from "../../utils/types/matchInterface";
import actionsType from "../actions/actionsType";

const matchReducer = (
  currentState: MatchInterface[] = [],
  action: ActionInterface = {}
) => {
  let newMatch: MatchInterface[] | MatchInterface;

  switch (action.type) {
    case actionsType.loadMatches:
      if (action.matches) {
        newMatch = [...action.matches];
      } else {
        newMatch = [...currentState];
      }
      break;

    default:
      newMatch = [...currentState];
      break;
  }
  return newMatch;
};

export default matchReducer;
