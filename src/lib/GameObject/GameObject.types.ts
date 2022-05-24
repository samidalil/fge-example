import type { AnyObject } from "../../types";

export type GameObjectId = string;

export type GameObject<D extends AnyObject> = {
  readonly data: D;
  readonly id: GameObjectId;
  readonly name: string;
  readonly parentId: GameObjectId;
};
