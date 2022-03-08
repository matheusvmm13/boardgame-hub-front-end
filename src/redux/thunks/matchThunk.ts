import { MatchInterface } from "../../utils/types/matchInterface";
import { loadMatchesAction } from "../actions/actionsCreator";

export const loadMatchesThunk = async (
  dispatch: (arg0: { type: string; match: MatchInterface }) => void
) => {
  const response = await fetch("http://localhost:4000/matches");
  const matchesList = await response.json();
  dispatch(loadMatchesAction(matchesList));
};
