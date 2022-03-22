import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import MatchInfoPage from "./MatchInfoPage";

describe("Given a New Match Info page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render form for a new match", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MatchInfoPage />
          </Provider>
        </BrowserRouter>
      );

      const textField = screen.getByRole("heading", {
        name: /^Next Match:/i,
      });

      const buttonField = screen.getByRole("button", {
        name: /REQUEST TO JOIN/i,
      });

      expect(textField).toBeInTheDocument();
      expect(buttonField).toBeInTheDocument();
    });
  });
});
