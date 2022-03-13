import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import FormMatch from "./FormMatch";

describe("Given a form component", () => {
  describe("When it's rendered", () => {
    test("It should display a form", () => {
      render(
        <Provider store={store}>
          <FormMatch />
        </Provider>
      );

      const textField = screen.getByRole("combobox", {
        name: "Choose one of your games",
      });

      expect(textField).toBeInTheDocument();
    });
  });
});
