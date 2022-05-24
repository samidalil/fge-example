import type { GameObject, GameObjectId, Transform } from "../../types";

export type Scene = {
  readonly hierarchy: SceneHierarchy;
  readonly objects: readonly SceneObject[];
};

export type SceneHierarchy = {
  readonly hierarchy: Record<GameObjectId, readonly GameObjectId[]>;
  readonly root: GameObjectId;
};

export type SceneObject = GameObject<SceneObjectConstraint>;

export type SceneObjectConstraint = {
  readonly transform: Transform;
};
