import type { Vector } from "../../types";

import type { PlayerInput } from "./common";

export type State = {
  readonly groundY: number;
  readonly inputQueue: readonly PlayerInput[]
  readonly player: {
    readonly onGround: boolean;
    readonly position: Vector;
    readonly velocity: Vector;
  };
  readonly won: boolean;
};
