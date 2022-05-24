import type {
  Vector,
  VectorOperationToScalar,
  VectorOperationToVector,
  VectorSelfOperationToScalar,
  VectorSelfOperationToVector,
} from "../../types";

export const add: VectorOperationToVector = ([x, y], [ox, oy]) => create(x + ox, y + oy);

export const addScalar: VectorOperationToVector<number> = ([x, y], rhs) => create(x + rhs, y + rhs);

export const clone: VectorSelfOperationToVector = (vec) => create(...vec);

export const create = (x = 0, y = 0): Vector => [x, y];

export const distance: VectorOperationToScalar = (lhs, rhs) => Math.sqrt(sqrDistance(lhs, rhs));

export const divide: VectorOperationToVector<number> = ([x, y], rhs) => create(x / rhs, y / rhs);

export const magnitude: VectorSelfOperationToScalar = (vec) => Math.sqrt(sqrMagnitude(vec));

export const multiply: VectorOperationToVector<number> = ([x, y], rhs) => create(x * rhs, y * rhs);

export const sqrDistance: VectorOperationToScalar = ([x, y], [ox, oy]) => (x - ox) ** 2 + (y - oy) ** 2;

export const sqrMagnitude: VectorSelfOperationToScalar = ([x, y]) => x ** 2 + y ** 2;

export const subtract: VectorOperationToVector = ([x, y], [ox, oy]) => create(x - ox, y - oy);

export const subtractScalar: VectorOperationToVector<number> = ([x, y], rhs) => create(x - rhs, y - rhs);

export const x: VectorSelfOperationToScalar = ([x]) => x;

export const y: VectorSelfOperationToScalar = ([, y]) => y;

export const down = create(0, -1);

export const left = create(-1);

export const one = create(1, 1);

export const right = create(1);

export const up = create(0, 1);

export const zero = create();
