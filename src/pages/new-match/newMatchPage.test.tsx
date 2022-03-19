import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import NewMatchPage from "./NewMatchPage";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

describe("Given a New Match page component", () => {
  describe("When it's rendered", () => {
    test.skip("Then it should render form for a new match", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewMatchPage />
          </Provider>
        </BrowserRouter>
      );

      const textField = screen.getByRole("combobox", {
        name: "Choose one of your games",
      });

      expect(textField).toBeInTheDocument();
    });
  });
});
