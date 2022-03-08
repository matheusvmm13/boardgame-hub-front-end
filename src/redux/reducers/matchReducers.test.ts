import actionsType from "../actions/actionsType";
import matchReducer from "./matchReducer";

describe("Given a matchReducer function", () => {
  describe("When it is called with an empty state and the loadMatches action with an match", () => {
    test("Then it should return the new state with the array of matches", () => {
      const currentState: [] = [];

      const matchesArray = [
        {
          id: "12355",
          gameTitle: "Dune",
          image: "",
          creator: "username",
          date: "april 1990",
          players: ["", "", ""],
          location: "Barcelona",
        },
      ];
      const action = {
        type: actionsType.loadMatches,
        matches: matchesArray,
      };

      const newState = matchReducer(currentState, action);

      expect(newState).toEqual(matchesArray);
    });
  });
});
