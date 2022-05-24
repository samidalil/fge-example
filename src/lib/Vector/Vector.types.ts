export type Vector = readonly [x: number, y: number];

export type VectorOperationToScalar<RightHandSymbol = Vector> = (lhs: Vector, rhs: RightHandSymbol) => number;

export type VectorOperationToVector<RightHandSymbol = Vector> = (lhs: Vector, rhs: RightHandSymbol) => Vector;

export type VectorSelfOperationToScalar = (vec: Vector) => number;

export type VectorSelfOperationToVector = (vec: Vector) => Vector;
