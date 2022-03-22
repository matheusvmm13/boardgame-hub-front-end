import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import MatchCard from "./MatchCard";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
        <BrowserRouter>
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
        </BrowserRouter>
      );

      const text = screen.getByRole("heading", { name: /Dune Imperium/i });
      expect(text).toBeInTheDocument();
    });
    test("Then it should render with a delete text on it", () => {
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
        <BrowserRouter>
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
        </BrowserRouter>
      );

      const text = screen.getByText("Madrid");
      expect(text).toBeInTheDocument();
    });
  });
});

describe("Given a Match Card component with a link", () => {
  describe("When it's image is clicked", () => {
    test("Then it should navigate the user to another page", () => {
      const partida = {
        id: "12355",
        gameTitle: "Pandemic",
        image: "",
        creator: "username",
        date: "april 1990",
        maxPlayers: 5,
        players: ["", "", ""],
        location: "Madrid",
      };

      render(
        <BrowserRouter>
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
        </BrowserRouter>
      );

      userEvent.click(screen.getByRole("img", { name: /Pandemic/i }));

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
