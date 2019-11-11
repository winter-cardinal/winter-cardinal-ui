import { Application } from "pixi.js";
import { DApplicationLike } from "./d-application-like";
import { DControllerFocus } from "./d-controller-focus";
import { DPadding } from "./d-padding";
import { DynamicFontAtlases } from "./util/dynamic-font-atlases";

export interface DApplicationLayerLike extends Application {
	readonly application: DApplicationLike;
	readonly width: number;
	readonly height: number;
	readonly padding: DPadding;

	disallowUpdate(): void;
	allowUpdate(): void;
	update(): void;
	render(): void;
	refit(): void;
	reflow(): void;

	getFocusController(): DControllerFocus;
	getDynamicFontAtlases(): DynamicFontAtlases;
	getElementContainer(): HTMLElement;
}
