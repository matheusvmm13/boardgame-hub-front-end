import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import { MatchInterface } from "../../utils/types/matchInterface";
import { UserLoginDataInterface } from "../../utils/types/userInterface";
import actionsType from "./actionsType";

export const loadMatchesAction = (match: MatchInterface) => ({
  type: actionsType.loadMatches,
  match,
});

export const loadMatchesInfoAction = (match: MatchInterface) => ({
  type: actionsType.loadMatchesInfo,
  match,
});

export const loadMyMatchesAction = (match: MatchInterface) => ({
  type: actionsType.loadMyMatches,
  match,
});

export const updateMyMatchesAction = (match: MatchInterface) => ({
  type: actionsType.updateMyMatches,
  match,
});

export const deleteMatchesAction = (id: string) => ({
  type: actionsType.deleteMatches,
  id,
});

export const createMatchesAction = (match: MatchInterface) => ({
  type: actionsType.createMatches,
  match,
});

export const loadGamesAction = (boardgame: BoardgameInterface) => ({
  type: actionsType.loadGames,
  boardgame,
});

export const loadMyGamesAction = (boardgame: BoardgameInterface) => ({
  type: actionsType.loadMyGames,
  boardgame,
});

export const addGameAction = (boardgame: BoardgameInterface) => ({
  type: actionsType.addGame,
  boardgame,
});

export const registerUserAction = (userData: UserLoginDataInterface) => ({
  type: actionsType.registerUser,
  userData,
});

export const loginUserAction = (userData: UserLoginDataInterface) => ({
  type: actionsType.loginUser,
  userData,
});

export const logoutUserAction = () => ({
  type: actionsType.logoutUser,
});
