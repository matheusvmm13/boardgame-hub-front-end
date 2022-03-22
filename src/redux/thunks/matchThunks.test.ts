import { MatchInterface } from "../../utils/types/matchInterface";
import {
  createMatchThunk,
  deleteMatchThunk,
  loadMatchesInfoThunk,
  loadMatchesThunk,
  loadMyMatchesThunk,
  updateMyMatchThunk,
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

      const id = "6238cbdb3ae9bb76b01b7dbc";
      const dispatch = jest.fn();

      const myMatchesThunk = loadMyMatchesThunk(id);
      await myMatchesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a updateMyMatchThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const match = {
        id: "531452",
        gameTitle: "Carcassone",
        image: "",
        creator: "username2",
        date: "march 2020",
        maxPlayers: 3,
        players: ["", "", ""],
        location: "Madrid",
      };

      const id = "6233075705443313063349fd";
      const dispatch = jest.fn();

      const myMatchesThunk = updateMyMatchThunk(match, id);
      await myMatchesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadMatchesInfoThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const id = "62349fe9c93388f7b096ab02";
      const dispatch = jest.fn();

      const myMatchesThunk = loadMatchesInfoThunk(id);
      await myMatchesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createMatchThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const match: MatchInterface = {
        id: "622dcd3487c35208164d62a2",
        gameTitle: "Root",
        image:
          "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
        creator: "",
        date: "2022-08-01",
        maxPlayers: 4,
        players: ["", ""],
        location: "Barcelona",
      };

      const dispatch = jest.fn();

      const expectedAction = {
        type: "create-matches",
        match: match,
      };

      const myMatchesThunk = createMatchThunk(match);
      await myMatchesThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deleteMatchThunk function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      jest.setTimeout(8000);

      const id = "531452";
      const dispatch = jest.fn();

      const expectedAction = {
        type: "delete-matches",
        id: id,
      };

      const myMatchesThunk = deleteMatchThunk(id);
      await myMatchesThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
