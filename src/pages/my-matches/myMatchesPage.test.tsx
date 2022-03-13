import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import MyMatchesPage from "./MyMatchesPage";

describe("Given a My Matches page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title with All Matches", () => {
      render(
        <Provider store={store}>
          <MyMatchesPage />
        </Provider>
      );

      const TextHeading = screen.getByRole("heading", {
        name: "My Matches",
      });

      expect(TextHeading).toBeInTheDocument();
    });
  });
});
