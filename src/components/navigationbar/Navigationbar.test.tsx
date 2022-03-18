import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigationbar from "./Navigationbar";

describe("Given a Navigationbar component", () => {
  describe("When it get's rendered", () => {
    test("Then it should display a navigation with six links", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigationbar />
          </BrowserRouter>
        </Provider>
      );

      const loginNavLink = screen.getByRole("link", { name: /Login/i });
      const signupNavLink = screen.getByRole("link", { name: /Sign Up/i });

      expect(loginNavLink).toBeInTheDocument();
      expect(signupNavLink).toBeInTheDocument();
    });
  });
});
