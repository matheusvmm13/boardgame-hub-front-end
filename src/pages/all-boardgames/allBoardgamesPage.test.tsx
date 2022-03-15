import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import AllBoardgamesPage from "./AllBoardgamesPage";

describe("Given a All Boardgames component", () => {
  describe("When it get's rendered", () => {
    test("Then it must display a title text", () => {
      render(
        <Provider store={store}>
          <AllBoardgamesPage />
        </Provider>
      );

      const TextHeading = screen.getByRole("heading", {
        name: "All Boardgames",
      });

      expect(TextHeading).toBeInTheDocument();
    });
  });
  describe("When it's rendered with an array of boardgames, with a text 'Root' in one of them", () => {
    test("Then it should render a paragraph with the text 'Root'", async () => {
      render(
        <Provider store={store}>
          <AllBoardgamesPage />
        </Provider>
      );

      const textFound = await screen.findByText(/Root/i);

      expect(textFound).toBeInTheDocument();
    });
  });
});
