import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import AllMatchesPage from "./AllMatchesPage";

describe("Given a All Matches page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title with All Matches", () => {
      render(
        <Provider store={store}>
          <AllMatchesPage />
        </Provider>
      );

      const TextHeading = screen.getByRole("heading", {
        name: "All Matches",
      });

      expect(TextHeading).toBeInTheDocument();
    });
  });
  describe("When it's rendered with an array of Matches, with a text 'Spirit Island' in one of them", () => {
    test("Then it should render a paragraph with the text 'Spirit Island'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AllMatchesPage />
          </Provider>
        </BrowserRouter>
      );

      const textFound = await screen.findByText(/Carrer de Sans, Barcelona/i);

      expect(textFound).toBeInTheDocument();
    });
  });
});
