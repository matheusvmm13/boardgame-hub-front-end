import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import EditForm from "./EditForm";

describe("Given a edut form component", () => {
  describe("When it's rendered", () => {
    test("It should display a form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditForm />
          </Provider>
        </BrowserRouter>
      );

      const placeholderInput = screen.queryByPlaceholderText("Where");

      const playersField = screen.getByRole("spinbutton", {
        name: "Number of Players",
      });
      const locationField = screen.getByRole("textbox", {
        name: /Choose a location/i,
      });
      const button = screen.getByRole("button", {
        name: "Update Match",
      });

      expect(playersField).toBeInTheDocument();
      expect(placeholderInput).toBeInTheDocument();
      expect(locationField).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When are creating and it types in the title input", () => {
    test("Then it should type the product 'Silla'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditForm />
          </Provider>
        </BrowserRouter>
      );

      const loctionInput = screen.getByRole("textbox", {
        name: /Choose a location/i,
      });

      const location = "Barcelona";

      userEvent.type(loctionInput, location);

      expect(loctionInput).toHaveValue(location);
    });
  });
});
