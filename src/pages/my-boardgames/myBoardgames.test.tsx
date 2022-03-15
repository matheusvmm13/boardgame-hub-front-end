import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import MyBoardgamesPage from "./MyBoardgamesPage";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

describe("Given a My Boardgames page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title with All Boardgames", () => {
      render(
        <Provider store={store}>
          <MyBoardgamesPage />
        </Provider>
      );

      const TextHeading = screen.getByRole("heading", {
        name: "My Boardgames",
      });

      expect(TextHeading).toBeInTheDocument();
    });
  });
});
