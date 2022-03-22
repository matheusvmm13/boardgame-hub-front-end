import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import SignupPage from "./SignupPage";

describe("Given a Signup page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a header, form and button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SignupPage />
          </Provider>
        </BrowserRouter>
      );

      const imageField = screen.getByRole("img", {
        name: /boardgame/i,
      });
      const headingTextField = screen.getByRole("heading", {
        name: /Sign Up/i,
      });
      const nameTextField = screen.getAllByRole("textbox", {
        name: /Name/i,
      });
      const usernameTextField = screen.getByRole("textbox", {
        name: /Username/i,
      });
      const buttonTextField = screen.getByRole("button", {
        name: /Sign Up/i,
      });

      expect(imageField).toBeInTheDocument();
      expect(headingTextField).toBeInTheDocument();
      expect(nameTextField).toHaveLength(2);
      expect(usernameTextField).toBeInTheDocument();
      expect(buttonTextField).toBeInTheDocument();
    });
  });
});
