import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import MatchCard from "./MatchCard";

describe("Given a Match Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should render", () => {
      const partida = {
        id: "12355",
        gameTitle: "Dune Imperium",
        image: "",
        creator: "username",
        date: "april 1990",
        maxPlayers: 5,
        players: ["", "", ""],
        location: "Madrid",
      };

      render(
        <Provider store={store}>
          <MatchCard
            gameTitle={partida.gameTitle}
            image={partida.image}
            date={partida.date}
            maxPlayers={partida.maxPlayers}
            players={partida.players}
            location={partida.location}
            key={partida.id}
            id={partida.id}
            creator={partida.creator}
          />
        </Provider>
      );

      const text = screen.getByRole("heading", { name: /Dune Imperium/i });
      expect(text).toBeInTheDocument();
    });
  });
});
