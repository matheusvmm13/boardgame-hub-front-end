import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import AllMatchesPage from "./AllMatchesPage";

describe("Given a All Matches page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render form for a new match", () => {
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
});
