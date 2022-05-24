import { update } from "fge";

import type { State } from "../types";

export const applyWinCheck = update<State>((state) => ({
  won: state.player.position[0] >= 800,
}));
