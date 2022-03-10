import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { MatchInterface } from "../../utils/types/matchInterface";
import {
  createMatchesAction,
  deleteMatchesAction,
  loadMatchesAction,
} from "../actions/actionsCreator";

export const loadMatchesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API}matches`);
  const matchesList = await response.json();
  const allMatches = matchesList.matches;
  dispatch(loadMatchesAction(allMatches));
};

export const deleteMatchThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}my-matches/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteMatchesAction(id));
    }
  };

export const createMatchThunk =
  (match: MatchInterface) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}my-matches/new-match`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(match),
      }
    );
    const newMatch = await response.json();
    dispatch(createMatchesAction(newMatch));
  };
