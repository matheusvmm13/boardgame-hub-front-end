import { BoardgameInterface } from "./boardgameInterface";
import { MatchInterface } from "./matchInterface";

export interface anyActionInterface {
  type?: string;
}

export interface loadMatchesInterface extends anyActionInterface {
  match: MatchInterface[];
}

export interface loadMyMatchesInterface extends anyActionInterface {
  match: MatchInterface[];
}

export interface loadMyGamesInterface extends anyActionInterface {
  boardgame: BoardgameInterface[];
}

export interface deleteMatchesInterface extends anyActionInterface {
  id: string;
}

export interface createMatchesInterface extends anyActionInterface {
  match: MatchInterface;
}

export interface addGameInterface extends anyActionInterface {
  boardgame: BoardgameInterface;
}
