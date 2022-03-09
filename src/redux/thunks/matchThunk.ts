import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadMatchesAction } from "../actions/actionsCreator";

export const loadMatchesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    "https://boardgame-hub-api.onrender.com/matches"
  );
  const matchesList = await response.json();
  dispatch(loadMatchesAction(matchesList));
};
