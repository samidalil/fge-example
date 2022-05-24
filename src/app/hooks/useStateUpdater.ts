import type { AnyState, Clock, RunnerReturnType } from "fge";
import { useCallback, useRef, useState } from "react";

import { useAnimationFrame } from "./useAnimationFrame";

export type Updater<S extends AnyState, C extends Clock> = (args: RunnerReturnType<S, C>) => Promise<RunnerReturnType<S, C>>;

export const useStateUpdater = <S extends AnyState, C extends Clock>(initialState: S, initialClock: C, tick: Updater<S, C>) => {
  const [frames, setFrames] = useState(0);
  const clock = useRef(initialClock)
  const state = useRef(initialState);

  const callback = useCallback(async () => {
    if (!state.current.won) {
      [state.current, clock.current] = await tick([state.current, clock.current]);
      setFrames(frame => frame + 1);
    }
  }, [clock, state]);

  useAnimationFrame(callback);

  return [state.current, clock.current, frames] as const;
};
