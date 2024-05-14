import { DisplayObject, IPointData, Point, Rectangle } from "pixi.js";
import { DBase } from "./d-base";

export interface DViewTargetPoint {
	x: number;
	y: number;

	set(x?: number, y?: number): void;
}

export interface DViewTargetParent {
	toLocal(
		position: IPointData,
		from?: DisplayObject,
		point?: Point,
		skipUpdate?: boolean
	): PIXI.Point;
}

export interface DViewTarget {
	parent?: DViewTargetParent | null;
	readonly scale: DViewTargetPoint;
	readonly position: DViewTargetPoint;
	getLocalBounds(rect: Rectangle): Rectangle;
}

export type DViewToTarget = (parent: DBase) => DViewTarget | null;
