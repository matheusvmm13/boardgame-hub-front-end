import jwtDecode from "jwt-decode";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { DecodedToken } from "../../../components/form/FormMatch";
import { UserLoginDataInterface } from "../../../utils/types/userInterface";
import { loginUserAction } from "../../actions/actionsCreator";

export const userLoginThunk =
  (user: UserLoginDataInterface) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_LOCAL_API}users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const token = await response.json();
    const decodedToken: DecodedToken = jwtDecode(token.token);
    localStorage.setItem("token", token.token);

    const logedUser = {
      name: decodedToken.name,
      username: user.username,
      password: user.password,
      id: decodedToken.id,
      loggedIn: true,
    };

    console.log(logedUser);
    dispatch(loginUserAction(logedUser));
  };

export default userLoginThunk;
