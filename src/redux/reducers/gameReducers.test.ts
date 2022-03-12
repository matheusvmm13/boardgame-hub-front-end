import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import actionsType from "../actions/actionsType";
import gameReducer from "./gameReducer";

describe("Given a gameReducer Add function", () => {
  describe("When it is called with a state and add action", () => {
    test("Then it should return the new state", async () => {
      const state = {
        name: "",
        image_url: "",
        max_players: 0,
        min_players: 0,
        max_playtime: 0,
      };

      const newGame: BoardgameInterface = {
        name: "Wingspan",
        image_url: "",
        max_players: 5,
        min_players: 1,
        max_playtime: 120,
      };

      const action = {
        type: actionsType.addGame,
        boardgame: newGame,
      };

      const newState = await gameReducer(state, action);

      expect(newState).toEqual(newGame);
    });
  });
});

describe("Given a gameReducer default function", () => {
  describe("When it is called with an empty state no action", () => {
    test("Then it should return the current state", async () => {
      const currentState: BoardgameInterface = {
        name: "Wingspan",
        image_url: "",
        max_players: 0,
        min_players: 0,
        max_playtime: 0,
      };

      const newState = await gameReducer(currentState);

      expect(newState).toEqual(currentState);
    });
  });
});
