import { update } from "fge";

import { Vector } from "../../lib";
import type { PlayerInput, State } from "../types";

const getVelocityFromInput = (input: PlayerInput) => {
  switch (input) {
    case "left":
      return Vector.left;
    case "right":
      return Vector.right;
    case "jump":
      return Vector.up;
    default:
      return Vector.zero;
  }
};

export const applyInput = update<State>((state) => {
  const [input, ...inputQueue] = state.inputQueue;
  const velocity = input === "jump" && !state.player.onGround
    ? Vector.zero
    : getVelocityFromInput(input);

  return {
    inputQueue,
    player: { velocity: Vector.add(state.player.velocity, velocity) },
  };
});
