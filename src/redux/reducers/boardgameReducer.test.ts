import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import actionsType from "../actions/actionsType";
import boardgameReducer from "./boardgameReducer";

describe("Given a boardgameReducer function", () => {
  describe("When it is called with an empty state and the load games action with a game", () => {
    test("Then it should return the new state with the array of games", async () => {
      const boardgameState: BoardgameInterface[] = [];

      const gamesArray: BoardgameInterface[] = [
        {
          name: "string",
          _id: "string",
          image_url: "string",
          max_players: 3,
          min_players: 3,
          max_playtime: 30,
        },
        {
          name: "string",
          _id: "string",
          image_url: "string",
          max_players: 6,
          min_players: 1,
          max_playtime: 130,
        },
      ];

      const action = {
        type: actionsType.loadGames,
        boardgame: gamesArray,
      };

      const newState = await boardgameReducer(boardgameState, action);

      expect(newState).toEqual(gamesArray);
    });
  });
  describe("When it is called with the load my games action", () => {
    test("Then it should return the new state with the array of games from the user", async () => {
      const boardgameState: BoardgameInterface[] = [];

      const gamesArray: BoardgameInterface[] = [
        {
          name: "string",
          _id: "string",
          image_url: "string",
          max_players: 3,
          min_players: 3,
          max_playtime: 30,
        },
        {
          name: "string",
          _id: "string",
          image_url: "string",
          max_players: 6,
          min_players: 1,
          max_playtime: 130,
        },
      ];

      const action = {
        type: actionsType.loadMyGames,
        boardgame: gamesArray,
      };

      const newState = await boardgameReducer(boardgameState, action);

      expect(newState).toEqual(gamesArray);
    });
  });
});

describe("Given a boardgameReducer default function", () => {
  describe("When it is called with an empty state no action", () => {
    test("Then it should return the current state", async () => {
      const currentState: BoardgameInterface[] = [];

      const newState = await boardgameReducer(currentState);

      expect(newState).toEqual(currentState);
    });
  });
});
