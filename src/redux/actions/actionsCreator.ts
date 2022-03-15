import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import { MatchInterface } from "../../utils/types/matchInterface";
import actionsType from "./actionsType";

export const loadMatchesAction = (match: MatchInterface) => ({
  type: actionsType.loadMatches,
  match,
});

export const loadMyMatchesAction = (match: MatchInterface) => ({
  type: actionsType.loadMyMatches,
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
