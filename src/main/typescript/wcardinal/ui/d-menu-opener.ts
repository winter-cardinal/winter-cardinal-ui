import { Rectangle } from "pixi.js";

export interface DMenuOpener {
	getBounds(skipUpdate?: boolean, result?: Rectangle): Rectangle;
}
