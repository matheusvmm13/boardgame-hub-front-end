import {
  addGameThunk,
  loadGamesThunk,
  loadMyGamesThunk,
} from "./boardgameThunks";

describe("Given a loadGamesThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(1000);

      const dispatch = jest.fn();
      await loadGamesThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addGamesThunk function", () => {
  describe("When it called", () => {
    test.skip("Then it should dispatch a function", async () => {
      jest.setTimeout(9000);
      jest.useFakeTimers();
      jest.advanceTimersByTime(1000);

      const mockLocalStorage = {
        getItem: () =>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
      };
      Object.defineProperty(window, "localStorage", {
        value: mockLocalStorage,
      });

      jest.mock("jwt-decode", () => () => ({
        name: "Pepe",
        id: "6237363320b3b55972088612",
        iat: 1647183996,
      }));

      const dispatch = jest.fn();

      const myAddThunk = await addGameThunk("622dcd3487c35208164d62a2");
      await myAddThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadMyGamesThunk function", () => {
  describe("When it called", () => {
    test.skip("Then it should dispatch a function", async () => {
      jest.setTimeout(1200);
      jest.useFakeTimers();
      jest.advanceTimersByTime(1000);

      const mockLocalStorage = {
        getItem: () =>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
      };
      Object.defineProperty(window, "localStorage", {
        value: mockLocalStorage,
      });

      jest.mock("jwt-decode", () => () => ({
        name: "Eric Lang",
        id: "622a34ef55c15b820edc9a3e",
        iat: 1647183996,
      }));

      const dispatch = jest.fn();

      const myLoadMyGamesThunk = loadMyGamesThunk("622a34ef55c15b820edc9a3e");
      await myLoadMyGamesThunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
