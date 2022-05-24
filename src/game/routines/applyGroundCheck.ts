import { update } from "fge";

import type { State } from "../types";

export const applyGroundCheck = update<State>((state) => {
  const onGround = state.player.position[1] <= state.groundY;

  return { player: { onGround } };
});
