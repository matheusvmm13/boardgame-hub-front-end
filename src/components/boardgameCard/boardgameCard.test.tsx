import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import BoardgameCard from "./BoardgameCardComponent";

describe("Given a Match Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should render", () => {
      const game = {
        _id: "12355",
        name: "Dune Imperium",
        image_url: "",
        min_players: 1,
        maxPlayers: 5,
        max_playtime: 120,
      };

      render(
        <Provider store={store}>
          <BoardgameCard name={game.name} />
        </Provider>
      );

      const text = screen.getByRole("heading", { name: /Dune Imperium/i });
      expect(text).toBeInTheDocument();
    });
  });
});
