import { DisplayObject } from "pixi.js";

export interface DMenuCloseable extends DisplayObject {
	close(): void;
}
