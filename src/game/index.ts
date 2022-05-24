import { type Clock, createVariableTimeStepRunner, type RunnerReturnType } from "fge";

import routines from "./routines";
import type { State } from "./types";

const runner = createVariableTimeStepRunner<State>(0, 1);

export const initialState: State = {
  groundY: 0,
  inputQueue: Array.from({ length: 8 }).map(() => "right"),
  player: {
    onGround: false,
    position: [0, 0],
    velocity: [0, 0],
  },
  won: false,
};

export const tick = async (args: RunnerReturnType<State, Clock>) => {
  if (!args[0].won) {
    return runner(args[0], routines, args[1]);
  }

  return args;
};

