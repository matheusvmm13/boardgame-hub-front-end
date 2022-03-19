import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import MyMatchesPage from "./MyMatchesPage";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

describe("Given a My Matches page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title with All Matches", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyMatchesPage />
          </Provider>
        </BrowserRouter>
      );

      const TextHeading = screen.getByRole("heading", {
        name: "My Matches",
      });

      expect(TextHeading).toBeInTheDocument();
    });
  });
});
