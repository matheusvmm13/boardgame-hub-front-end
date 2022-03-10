import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  deleteMatchesAction,
  loadMatchesAction,
} from "../actions/actionsCreator";

export const loadMatchesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    "https://boardgame-hub-api.onrender.com/matches"
  );
  const matchesList = await response.json();
  const allMatches = matchesList.matches;
  dispatch(loadMatchesAction(allMatches));
};

export const deleteMatchThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `https://boardgame-hub-api.onrender.com/my-matches/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteMatchesAction(id));
    }
  };
