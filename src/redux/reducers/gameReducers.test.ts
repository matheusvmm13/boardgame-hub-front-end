import actionsType from "../actions/actionsType";
import gameReducer from "./gameReducer";

describe("Given a gameReducer Add function", () => {
  describe("When it is called with a state and add action", () => {
    test.only("Then it should return the new state", async () => {
      const initialState = {
        name: "",
        id: "",
        image_url: "",
        max_players: 0,
        min_players: 0,
        max_playtime: 0,
      };

      const newGame = {
        name: "Root",
        id: "622dcd3487c35208164d62a2",
        image_url: "hdoahodha.png",
        max_players: 6,
        min_players: 2,
        max_playtime: 120,
      };

      const action = {
        type: actionsType.addGame,
        boardgame: newGame,
      };

      const newState = await gameReducer(initialState, action);

      expect(newState).toEqual(newGame);
    });
  });
});
