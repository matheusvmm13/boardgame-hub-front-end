import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import FormMatch from "./FormMatch";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

describe("Given a form component", () => {
  describe("When it's rendered", () => {
    test.skip("It should display a form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormMatch />
          </Provider>
        </BrowserRouter>
      );

      const textField = screen.getByRole("combobox", {
        name: "Choose one of your games",
      });
      const locationField = screen.getByRole("textbox", {
        name: "Choose a location",
      });
      const button = screen.getByRole("button", {
        name: "Create Match",
      });

      expect(textField).toBeInTheDocument();
      expect(locationField).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
