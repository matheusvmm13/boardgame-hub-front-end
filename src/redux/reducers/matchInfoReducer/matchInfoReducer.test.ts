import { MatchInterface } from "../../../utils/types/matchInterface";
import actionsType from "../../actions/actionsType";
import matchInfoReducer from "./matchInfoReducer";

describe("Given a matchInforReducer function", () => {
  describe("When it is called with load match information action with match data", () => {
    test("Then it should return the new state with the match data", async () => {
      const matchInfo: MatchInterface | {} = {
        id: "12355",
        gameTitle: "Dune",
        image: "",
        creator: "username",
        date: "april 1990",
        maxPlayers: 5,
        players: ["", "", ""],
        location: "Madrid",
      };

      const action = {
        type: actionsType.loadMatchesInfo,
        match: matchInfo,
      };

      const newState = await matchInfoReducer(matchInfo, action);

      expect(newState).toEqual(matchInfo);
    });
  });
});
