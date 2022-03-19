import toast from "react-hot-toast";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { MatchInterface } from "../../utils/types/matchInterface";
import {
  createMatchesAction,
  deleteMatchesAction,
  loadMatchesAction,
  loadMatchesInfoAction,
} from "../actions/actionsCreator";

export const loadMatchesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API}matches`);
  const matchesList = await response.json();
  const allMatches = matchesList.matches;
  dispatch(loadMatchesAction(allMatches));
};

export const loadMatchesInfoThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}matches/${id}`
    );
    const matchInfo = await response.json();
    console.log(matchInfo);
    const matchDetails = matchInfo.match;
    dispatch(loadMatchesInfoAction(matchDetails));
  };

export const loadMyMatchesThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}my-matches/${id}`,
      {
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }),
      }
    );
    const myMatchesList = await response.json();
    dispatch(loadMatchesAction(myMatchesList));
  };

export const deleteMatchThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}my-matches/delete/${id}`,
      {
        method: "DELETE",
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }),
      }
    );
    if (response.ok) {
      dispatch(deleteMatchesAction(id));
      toast.success("Match deleted");
    } else {
      toast.error("Something went wrong");
    }
  };

export const createMatchThunk =
  (match: MatchInterface) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}my-matches/new-match`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(match),
      }
    );
    const newMatch = await response.json();
    dispatch(createMatchesAction(newMatch));
    toast.success("New match created");
  };
