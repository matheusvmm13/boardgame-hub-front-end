import { AnyAction } from "redux";
import jwtDecode from "jwt-decode";
import { ThunkDispatch } from "redux-thunk";
import { addGameAction } from "../actions/actionsCreator";
import { DecodedToken } from "../../components/form/FormMatch";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";

export const addGameThunk =
  (name: Partial<BoardgameInterface> | string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const token: string | null = localStorage.getItem("token");
    if (token !== null) {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const response = await fetch(
        `http://localhost:3500/all-boardgames/add/${name}/${userId}`,
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
