import userLoginThunk, { registerThunk } from "./userThunks";

describe("Given a loginUserThunk function", () => {
  describe("When it is called with correct credentials", () => {
    test("Then it should call dispatch with the loginUser action", async () => {
      const user = {
        name: "matheus",
        username: "matheusvmm",
        password: "123456mat",
        id: "6234c400c43bce5d56530444",
        loggedIn: true,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWF0aGV1cyIsImlkIjoiNjIzNGM0MDBjNDNiY2U1ZDU2NTMwNDQ0IiwiaWF0IjoxNjQ3OTQxNjI2fQ.zQYuuR-36zUY9jcY1LP2HUXviN6F-tBgQOYQlu_iX2U",
      };

      const expectedAction = {
        type: "login-user",
        userData: {
          id: "6234c400c43bce5d56530444",
          loggedIn: true,
          name: "matheus",
          password: "123456mat",
          username: "matheusvmm",
        },
      };
      const dispatch = jest.fn();

      const loginThunk = userLoginThunk(user);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a registerUserThunk function", () => {
  describe("When it is called with a userData to register", () => {
    test("Then it should call dispatch with the registerUser action", async () => {
      const userData = {
        name: "Laura",
        username: "laurawallace",
        password: "Sil1234",
      };

      const dispatch = jest.fn();

      const expectedAction = {
        type: "register-user",
        userData: {
          name: "Laura",
          username: "laurawallace",
          password:
            "$2b$10$6YGQ8YbSlw1CDfv2oUa8PuakrP8TTRR55eU81YmR3zfQrnEIQA0PC",
          boardgames: [],
          matches: [],
          id: "623790b0dfa33dfc6f497aca",
        },
      };

      const registerThunkFunction = registerThunk(userData);
      await registerThunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
