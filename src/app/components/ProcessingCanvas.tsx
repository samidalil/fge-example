import React from "react";
import Sketch from "react-p5";

import { draw, setup, windowResized } from "../../api/p5";
import type { Drawable } from "../../api/p5/types";

export type ProcessingCanvasProps = {
  readonly elements: readonly Drawable[]
};

export const ProcessingCanvas = () => (
  <Sketch draw={draw} setup={setup} windowResized={windowResized} />
);
