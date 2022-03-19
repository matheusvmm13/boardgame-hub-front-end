import { BoardgameInterface } from "./boardgameInterface";
import { MatchInterface } from "./matchInterface";
import { UserLoginDataInterface } from "./userInterface";

export interface anyActionInterface {
  type?: string;
}

export interface loadMatchesInterface extends anyActionInterface {
  match: MatchInterface[];
}
export interface loadMatchesInfoInterface extends anyActionInterface {
  match: MatchInterface;
}

export interface loadMyMatchesInterface extends anyActionInterface {
  match: MatchInterface[];
}

export interface createMatchesInterface extends anyActionInterface {
  match: MatchInterface;
}

export interface deleteMatchesInterface extends anyActionInterface {
  id: string;
}

export interface loadGamesInterface extends anyActionInterface {
  boardgame: BoardgameInterface[];
}
export interface loadMyGamesInterface extends anyActionInterface {
  boardgame: BoardgameInterface[];
}

export interface addGameInterface extends anyActionInterface {
  boardgame: BoardgameInterface;
}

export interface logingUserInterface extends anyActionInterface {
  userData: UserLoginDataInterface;
}
