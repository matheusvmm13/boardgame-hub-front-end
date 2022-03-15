import {
  addGameThunk,
  loadGamesThunk,
  loadMyGamesThunk,
} from "./boardgameThunks";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

describe("Given a addGameThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGluYSBCbyIsImlkIjoiNjIyYjBhZThhMjVkODNlMzU4OTNiM2NjIiwiaWF0IjoxNjQ3MjYyNjkyfQ.JgSsxiFefjTqn-nil25OIizxA_cfCP9jX6xyZaOBjvI"
      );

      const gameId = "622dd09e87c35208164d62c3";
      const dispatch = jest.fn();

      const myAddGameThunk = addGameThunk(gameId);
      await myAddGameThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadGamesThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const dispatch = jest.fn();
      await loadGamesThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadMyGamesThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const gameId = "622dd09e87c35208164d62c3";
      const dispatch = jest.fn();

      const myLoadMyGamesThunk = loadMyGamesThunk(gameId);
      await myLoadMyGamesThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
