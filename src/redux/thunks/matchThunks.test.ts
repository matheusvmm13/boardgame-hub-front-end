import { deleteMatchThunk, loadMatchesThunk } from "./matchThunk";

describe("Given a loadMatchesThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadMatchesThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteRobotThunk", () => {
  describe("When it's called with an id parameter and api response is ok", () => {
    test("Then it should call dispatch passing a deleteAction", async () => {
      const id = "6229ef04d27d51d23afda2e0";

      const expectedAction = {
        type: "delete-matches",
        id: id,
      };

      const mockDispatch = jest.fn();

      const deleteThunk = deleteMatchThunk(id);

      await deleteThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
