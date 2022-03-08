import { Match } from "@testing-library/react";
import actionsType from "./actionsType";

export const loadMatchesAction = (match: Match) => ({
  type: actionsType.loadMatches,
  match,
});
