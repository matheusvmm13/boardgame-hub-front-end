import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a Not Found page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a header, image and a link", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const headingTextField = screen.getByRole("heading", {
        name: /404 Not Found/i,
      });
      const imageField = screen.getByRole("img", {
        name: /boardgame table flip/i,
      });
      const linkTextField = screen.getByRole("link", {
        name: /go home/i,
      });

      expect(headingTextField).toBeInTheDocument();
      expect(imageField).toBeInTheDocument();
      expect(linkTextField).toBeInTheDocument();
    });
  });
});
