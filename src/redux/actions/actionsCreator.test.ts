import { MatchInterface } from "../../utils/types/matchInterface";
import {
  addGameAction,
  createMatchesAction,
  deleteMatchesAction,
  loadMatchesAction,
} from "./actionsCreator";

describe("Given a load matches action", () => {
  describe("When it receives a match", () => {
    test("Then it should return an action type loadMatches", () => {
      const match: MatchInterface = {
        id: "34871",
        gameTitle: "Dune Imperium",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 4,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "load-matches",
        match,
      };

      const action = loadMatchesAction(match);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a delete matches action", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action type delete match", () => {
      const id = "332425";

      const expectedAction = {
        type: "delete-matches",
        id,
      };

      const deleteAction = deleteMatchesAction(id);
      expect(deleteAction).toEqual(expectedAction);
    });
  });
});

describe("Given a create matches action", () => {
  describe("When it receives an match", () => {
    test("Then it should return an action type create match", () => {
      const match: MatchInterface = {
        id: "345245871",
        gameTitle: "Dune",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 5,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "create-matches",
        match,
      };

      const createAction = createMatchesAction(match);

      expect(createAction).toEqual(expectedAction);
    });
  });
});

describe("Given a add games action", () => {
  describe("When it receives a name", () => {
    test("Then it should return an action type add game", () => {
      const game = {
        name: "",
        image_url: "",
        max_players: 0,
        min_players: 0,
        max_playtime: 0,
      };

      const expectedAction = {
        type: "add-game",
        boardgame: game,
      };

      const addAction = addGameAction(game);
      expect(addAction).toEqual(expectedAction);
    });
  });
});
