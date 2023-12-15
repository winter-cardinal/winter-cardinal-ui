import { Rectangle } from "pixi.js";
import { DApplicationTarget } from "./d-application-like";

export interface DMenuOpener extends DApplicationTarget {
	getBounds(skipUpdate?: boolean, result?: Rectangle): Rectangle;
}
