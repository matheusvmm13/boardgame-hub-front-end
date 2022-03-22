import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigationbar from "./Navigationbar";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockLocalStorage = {
  removeItem: () => jest.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

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

      const logoNavLink = screen.getByTestId("logo-element");
      const loginNavLink = screen.getByRole("link", { name: /Login/i });
      const signupNavLink = screen.getByRole("link", { name: /Sign Up/i });

      expect(logoNavLink).toBeInTheDocument();
      expect(loginNavLink).toBeInTheDocument();
      expect(signupNavLink).toBeInTheDocument();
    });
    test("Then it should render three links", () => {
      jest.useFakeTimers();
      jest.advanceTimersByTime(1000);

      const mockLocalStorage = {
        getItem: () =>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
      };
      Object.defineProperty(window, "localStorage", {
        value: mockLocalStorage,
      });

      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        users: {
          loggedIn: true,
        },
      });

      render(
        <Provider store={storeMock}>
          <BrowserRouter>
            <Navigationbar />
          </BrowserRouter>
        </Provider>
      );

      const findAllMatches = screen.getByText(/all matches/i);
      const findMyMatches = screen.getByText(/my matches/i);
      const findNewMatches = screen.getByText(/new match/i);
      const findMyBoardgames = screen.getByText(/my boardgames/i);
      const findAllBoardgames = screen.getByText(/all boardgames/i);
      const findLogout = screen.getByText(/Logout/i);

      expect(findAllMatches).toBeInTheDocument();
      expect(findMyMatches).toBeInTheDocument();
      expect(findNewMatches).toBeInTheDocument();
      expect(findMyBoardgames).toBeInTheDocument();
      expect(findAllBoardgames).toBeInTheDocument();
      expect(findLogout).toBeInTheDocument();
    });
  });
});

describe("Given Navbar component with links", () => {
  describe("When a nav link get's clicked", () => {
    test("It should redirect the user", () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        users: {
          loggedIn: true,
        },
      });

      render(
        <Provider store={storeMock}>
          <BrowserRouter>
            <Navigationbar />
          </BrowserRouter>
        </Provider>
      );

      const findLogout = screen.getByText(/logout/i);
      userEvent.click(findLogout);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
