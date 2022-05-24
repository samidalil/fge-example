import type { Clock } from "fge";
import React from "react";

import { tick } from "../../game";
import type { State } from "../../game/types";
import { useStateUpdater } from "../hooks";

import { ProcessingCanvas } from "./ProcessingCanvas";

export type GameProps = {
  readonly initialState: State;
  readonly initialClock: Clock;
};

export const Game = (props: GameProps) => {
  const [state] = useStateUpdater(props.initialState, props.initialClock, tick);

  console.log(state.won);

  return <ProcessingCanvas />;
};
