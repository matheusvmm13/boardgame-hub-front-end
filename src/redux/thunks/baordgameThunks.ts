import { AnyAction } from "redux";
import jwtDecode from "jwt-decode";
import { ThunkDispatch } from "redux-thunk";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import { addGameAction } from "../actions/actionsCreator";
import { DecodedToken } from "../../components/form/FormMatch";

export const addGameThunk =
  (boardgame: BoardgameInterface) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const token: string | null = localStorage.getItem("token");
    if (token !== null) {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const gameName = boardgame.name;
      const response = await fetch(
        `http://localhost:3500/all-boardgames/add/${gameName}/${userId}`,
        {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newAddedBoardgame = await response.json();
      dispatch(addGameAction(newAddedBoardgame));
    }
  };
