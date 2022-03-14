import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import NewMatchPage from "./NewMatchPage";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

describe("Given a New Match page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render form for a new match", () => {
      render(
        <Provider store={store}>
          <NewMatchPage />
        </Provider>
      );

      const textField = screen.getByRole("combobox", {
        name: "Choose one of your games",
      });

      expect(textField).toBeInTheDocument();
    });
  });
});
