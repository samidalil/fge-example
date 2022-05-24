import { update } from "fge";

import { Vector } from "../../lib";
import type { State } from "../types";

export const applyPseudoPhysics = update<State>((state, clock) => {
  const [x, y] = state.player.velocity;

  return {
    player: {
      position: Vector.add(state.player.position, state.player.velocity),
      velocity: Vector.create((Math.abs(x) < 1e-8 ? 0 : x) - clock.delta * Math.sign(x), state.player.onGround ? 0 : y - clock.delta),
    },
  };
});
