import { AnyAction } from "redux";
import jwtDecode from "jwt-decode";
import { ThunkDispatch } from "redux-thunk";
import {
  addGameAction,
  loadGamesAction,
  loadMyGamesAction,
} from "../actions/actionsCreator";
import { DecodedToken } from "../../components/form/FormMatch";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import toast from "react-hot-toast";

export const loadGamesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    `${process.env.REACT_APP_PUBLIC_API}all-boardgames`
  );
  const boardgamesList = await response.json();
  dispatch(loadGamesAction(boardgamesList.boardgames));
};

export const loadMyGamesThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    debugger;
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}my-boardgames/${id}`
    );
    const myGamesList = await response.json();
    dispatch(loadMyGamesAction(myGamesList));
  };

export const addGameThunk =
  (gameId: Partial<BoardgameInterface> | string | undefined) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const token: string = localStorage.getItem("token") as string;
    const decodedToken: DecodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}all-boardgames/add/${gameId}/${userId}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const newAddedBoardgame = await response.json();
    dispatch(addGameAction(newAddedBoardgame));
    toast.success("Game added to your list!");
  };
