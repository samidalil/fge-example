import type p5 from "p5";

import type { Transform } from "../../types";

export enum DrawType {
  BOX,
  OTHER,
}

type BaseDrawable = {
  readonly transform: Transform;
  readonly type: DrawType;
};

export type BoxDrawable = BaseDrawable & {
  readonly type: DrawType.BOX;
};

export type OtherDrawable = BaseDrawable & {
  readonly draw: (p5: p5, transform: Transform) => p5;
  readonly type: DrawType.OTHER;
};

export type Drawable = BoxDrawable | OtherDrawable;
