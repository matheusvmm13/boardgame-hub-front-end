import {
  deleteMatchThunk,
  loadMatchesThunk,
  loadMyMatchesThunk,
} from "./matchThunk";

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

/* describe("Given a deleteMatchesThunk", () => {
  describe("When it's called with an id parameter and api response is ok", () => {
    test("Then it should call dispatch passing a deleteAction", async () => {
      jest.setTimeout(9000);

      const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
      };

      Storage.prototype.getItem = jest.fn().mockResolvedValue(localStorageMock);

      const expectedAction = {
        type: "delete-matches",
        id: "6229ef04d27d51d23afda2e0",
      };

      const mockDispatch = jest.fn();

      const deleteThunk = deleteMatchThunk(expectedAction.id);
      await deleteThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
 */
