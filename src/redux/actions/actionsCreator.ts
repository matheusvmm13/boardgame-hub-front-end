import { MatchInterface } from "../../utils/types/matchInterface";
import actionsType from "./actionsType";

export const loadMatchesAction = (match: MatchInterface) => ({
  type: actionsType.loadMatches,
  match,
});

export const deleteMatchesAction = (id: string) => ({
  type: actionsType.deleteMatches,
  id,
});
