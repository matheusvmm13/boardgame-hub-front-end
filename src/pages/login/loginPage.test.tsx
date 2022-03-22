import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginPage from "./LoginPage";

describe("Given a Login page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a header, form and button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const headingTextField = screen.getByRole("heading", {
        name: "Login",
      });
      const usernameTextField = screen.getByRole("textbox", {
        name: "Username",
      });
      const buttonTextField = screen.getByRole("button", {
        name: "Login",
      });

      expect(headingTextField).toBeInTheDocument();
      expect(usernameTextField).toBeInTheDocument();
      expect(buttonTextField).toBeInTheDocument();
    });
  });
});
