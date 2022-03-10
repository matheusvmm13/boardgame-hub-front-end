import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import NewMatchPage from "./NewMatchPage";

describe("Given a New Match page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render form for a new match", () => {
      render(
        <Provider store={store}>
          <NewMatchPage />
        </Provider>
      );

      const textField = screen.getByRole("textbox", {
        name: "Choose one of your games",
      });

      expect(textField).toBeInTheDocument();
    });
  });
});
