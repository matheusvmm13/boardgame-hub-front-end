import { MatchInterface } from "../../utils/types/matchInterface";
import { loadMatchesAction } from "./actionsCreator";

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
