import { MatchInterface } from "../../utils/types/matchInterface";
import actionsType from "../actions/actionsType";
import matchReducer from "./matchReducer";

describe("Given a matchReducer function", () => {
  describe("When it is called with an empty state and the loadMatches action with an match", () => {
    test("Then it should return the new state with the array of matches", async () => {
      const state: MatchInterface[] = [];

      const matchesArray: MatchInterface[] = [
        {
          id: "12355",
          gameTitle: "Dune",
          image: "",
          creator: "username",
          date: "april 1990",
          maxPlayers: 5,
          players: ["", "", ""],
          location: "Madrid",
        },
        {
          id: "531452",
          gameTitle: "Carcassone",
          image: "",
          creator: "username2",
          date: "march 2020",
          maxPlayers: 4,
          players: ["", "", ""],
          location: "Barcelona",
        },
      ];

      const action = {
        type: actionsType.loadMatches,
        match: matchesArray,
      };

      const newState = await matchReducer(state, action);

      expect(newState).toEqual(matchesArray);
    });
  });
});

describe("Given a matchReducer default function", () => {
  describe("When it is called with an empty state no action", () => {
    test("Then it should return the current state", async () => {
      const currentState: MatchInterface[] = [];

      const newState = await matchReducer(currentState);

      expect(newState).toEqual(currentState);
    });
  });
});
