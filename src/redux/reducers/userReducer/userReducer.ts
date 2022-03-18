import { AnyAction } from "redux";
import {
  anyActionInterface,
  logingUserInterface,
} from "../../../utils/types/actionsInterface";
import {
  UserLoginDataInterface,
  UserMiscDataInterface,
} from "../../../utils/types/userInterface";
import actionsType from "../../actions/actionsType";

const initialUserData = {
  name: "",
  username: "",
  password: "",
  id: "",
  loggedIn: false,
};

const userReducer = (
  userState: UserLoginDataInterface | UserMiscDataInterface = initialUserData,
  action: anyActionInterface | logingUserInterface | AnyAction = {}
) => {
  let newUserState: UserLoginDataInterface | UserMiscDataInterface;

  switch (action.type) {
    case actionsType.loginUser:
      newUserState = { ...(action as logingUserInterface).userData };
      break;

    case actionsType.logoutUser:
      newUserState = { ...initialUserData };
      break;

    default:
      newUserState = { ...userState };
  }

  return newUserState;
};

export default userReducer;
