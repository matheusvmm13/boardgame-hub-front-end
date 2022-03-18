import { loadMatchesThunk, loadMyMatchesThunk } from "./matchThunk";

describe("Given a loadMatchesThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const dispatch = jest.fn();
      await loadMatchesThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadMyMatchesThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const id = "6229ef04d27d51d23afda2e0";
      const dispatch = jest.fn();

      const myMatchesThunk = loadMyMatchesThunk(id);
      await myMatchesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
