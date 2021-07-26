import { DisplayObject } from "pixi.js";
import { DPaneScrollBar, DPaneScrollBarParent } from "./d-pane-scrollbar";

export interface DTableScrollBarParent extends DPaneScrollBarParent {
	body: DisplayObject;
}

export class DTableScrollBar extends DPaneScrollBar<DTableScrollBarParent> {
	protected getOffsetVerticalStart(size: number): number {
		return size * 0.5 + this._parent.body.position.y;
	}
}
