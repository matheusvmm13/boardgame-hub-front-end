import actionsType from "../../actions/actionsType";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it is called with an empty state and the login action with user data", () => {
    test("Then it should return the new state with the user data", async () => {
      const newUserData = {
        name: "Matheus",
        username: "matheusvmm",
        password: "1234565677",
        id: "",
        loggedIn: false,
      };

      const action = {
        type: actionsType.loginUser,
        userData: newUserData,
      };

      const newState = await userReducer(newUserData, action);

      expect(newState).toEqual(newUserData);
    });
  });
  describe("When it is called with the logout action", () => {
    test("Then it should return the initial state of the user's data", async () => {
      const userData = {
        name: "",
        username: "",
        password: "",
        id: "",
        loggedIn: false,
      };

      const action = {
        type: actionsType.logoutUser,
      };

      const newState = await userReducer(userData, action);

      expect(newState).toEqual(userData);
    });
  });
  describe("When it is called with the register action", () => {
    test("Then it should return the new state with the registered user data", async () => {
      const userData = {
        name: "",
        username: "",
        password: "",
        id: "",
        loggedIn: false,
      };

      const action = {
        type: actionsType.registerUser,
        userData: userData,
      };

      const newState = await userReducer(userData, action);

      expect(newState).toEqual(userData);
    });
  });
});
