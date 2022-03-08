import { MatchInterface } from "./matchInterface";

export interface ActionInterface {
  type?: string;
  matches?: MatchInterface[];
  match?: MatchInterface;
}
