import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import { MatchInterface } from "../../utils/types/matchInterface";
import { UserLoginDataInterface } from "../../utils/types/userInterface";

import {
  addGameAction,
  createMatchesAction,
  deleteMatchesAction,
  loadGamesAction,
  loadMatchesAction,
  loadMatchesInfoAction,
  loadMyGamesAction,
  loadMyMatchesAction,
  loginUserAction,
  logoutUserAction,
  registerUserAction,
  updateMyMatchesAction,
} from "./actionsCreator";

describe("Given a load matches action", () => {
  describe("When it receives a match", () => {
    test("Then it should return an action type loadMatches", () => {
      const match: MatchInterface = {
        id: "34871",
        gameTitle: "Dune Imperium",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 4,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "load-matches",
        match,
      };

      const action = loadMatchesAction(match);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a load my matches action", () => {
  describe("When it receives a match", () => {
    test("Then it should return an action type loadMatches", () => {
      const match: MatchInterface = {
        id: "34871",
        gameTitle: "Carcassone",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 5,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "load-my-matches",
        match,
      };

      const action = loadMyMatchesAction(match);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a delete matches action", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action type delete match", () => {
      const id = "332425";

      const expectedAction = {
        type: "delete-matches",
        id,
      };

      const deleteAction = deleteMatchesAction(id);
      expect(deleteAction).toEqual(expectedAction);
    });
  });
});

describe("Given a load matches information action", () => {
  describe("When it receives an match", () => {
    test("Then it should return an action type load match info", () => {
      const match: MatchInterface = {
        id: "345245871",
        gameTitle: "Dune",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 5,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "load-matches-info",
        match,
      };

      const createAction = loadMatchesInfoAction(match);

      expect(createAction).toEqual(expectedAction);
    });
  });
});

describe("Given a create matches action", () => {
  describe("When it receives an match", () => {
    test("Then it should return an action type create match", () => {
      const match: MatchInterface = {
        id: "345245871",
        gameTitle: "Dune",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 5,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "create-matches",
        match,
      };

      const createAction = createMatchesAction(match);

      expect(createAction).toEqual(expectedAction);
    });
  });
});

describe("Given a update my matches action", () => {
  describe("When it receives an match", () => {
    test("Then it should return an action type update my match", () => {
      const match: MatchInterface = {
        id: "345245871",
        gameTitle: "Dune",
        image: "",
        creator: "username",
        date: "2022",
        maxPlayers: 5,
        players: ["uno", "dos"],
        location: "Barcelona",
      };

      const expectedAction = {
        type: "update-my-matches",
        match,
      };

      const createAction = updateMyMatchesAction(match);

      expect(createAction).toEqual(expectedAction);
    });
  });
});

describe("Given a load games action", () => {
  describe("When it receives a boardgame", () => {
    test("Then it should return an action type loadGames", () => {
      const boardgame: BoardgameInterface = {
        name: "string",
        _id: "string",
        image_url: "string",
        max_players: 3,
        min_players: 3,
        max_playtime: 30,
      };

      const expectedAction = {
        type: "load-games",
        boardgame,
      };

      const action = loadGamesAction(boardgame);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a load my games action", () => {
  describe("When it receives a boardgame", () => {
    test("Then it should return an action type loadMyGames", () => {
      const boardgame: BoardgameInterface = {
        name: "string",
        _id: "string",
        image_url: "string",
        max_players: 3,
        min_players: 3,
        max_playtime: 30,
      };

      const expectedAction = {
        type: "load-my-games",
        boardgame,
      };

      const action = loadMyGamesAction(boardgame);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a add games action", () => {
  describe("When it receives a name", () => {
    test("Then it should return an action type add game", () => {
      const game: BoardgameInterface = {
        name: "",
        _id: "",
        image_url: "",
        max_players: 0,
        min_players: 0,
        max_playtime: 0,
      };

      const expectedAction = {
        type: "add-game",
        boardgame: game,
      };

      const addAction = addGameAction(game);
      expect(addAction).toEqual(expectedAction);
    });
  });
});

describe("Given a Register user action", () => {
  describe("When it get's called", () => {
    test("Then it should return an action type registerUser", () => {
      const userData: UserLoginDataInterface = {
        name: "Matheus",
        username: "matheusvmm",
        password: "123456",
      };

      const expectedAction = {
        type: "register-user",
        userData: userData,
      };

      const action = registerUserAction(userData);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a login user action", () => {
  describe("When it receives a user data", () => {
    test("Then it should return an action type loginUser", () => {
      const userData: UserLoginDataInterface = {
        name: "Matheus",
        username: "matheusvmm",
        password: "123456",
      };

      const expectedAction = {
        type: "login-user",
        userData,
      };

      const action = loginUserAction(userData);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a logout user action", () => {
  describe("When it get's called", () => {
    test("Then it should return an action type logoutUser", () => {
      const expectedAction = {
        type: "logout-user",
      };

      const action = logoutUserAction();

      expect(action).toEqual(expectedAction);
    });
  });
});
