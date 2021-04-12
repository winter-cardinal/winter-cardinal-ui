import { Rectangle } from "pixi.js";
import { DBase } from "./d-base";

export interface DViewTargetPoint {
	x: number;
	y: number;

	set(x?: number, y?: number): void;
}

export interface DViewTarget {
	readonly scale: DViewTargetPoint;
	readonly position: DViewTargetPoint;
	getLocalBounds(rect: Rectangle): Rectangle;
}

export type DViewToTarget = (parent: DBase) => DViewTarget | null;
