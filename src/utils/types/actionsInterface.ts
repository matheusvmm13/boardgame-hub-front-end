import { BoardgameInterface } from "./boardgameInterface";
import { MatchInterface } from "./matchInterface";

export interface anyActionInterface {
  type?: string;
}

export interface loadMatchesInterface extends anyActionInterface {
  match: MatchInterface[];
}

export interface deleteMatchesInterface extends anyActionInterface {
  id: string;
}

export interface createMatchesInterface extends anyActionInterface {
  match: MatchInterface;
}

export interface addGameInterface extends anyActionInterface {
  name: Partial<BoardgameInterface>;
}
