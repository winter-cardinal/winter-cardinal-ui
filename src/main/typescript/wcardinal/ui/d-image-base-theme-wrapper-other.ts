import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseStateSet } from "./d-base-state-set";
import { DThemeImagePiece } from "./d-image-piece";

export class DImageBaseThemeWrapperOther implements DThemeImagePiece {
	protected _theme: DThemeImagePiece;

	constructor(theme: DThemeImagePiece) {
		this._theme = theme;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return this._theme.getImageAlignHorizontal();
	}

	getImageAlignVertical(): DAlignVertical {
		return this._theme.getImageAlignVertical();
	}

	getImageAlignWith(): DAlignWith {
		return this._theme.getImageAlignWith();
	}

	getImageMarginHorizontal(): number {
		return this._theme.getImageMarginHorizontal();
	}

	getImageMarginVertial(): number {
		return this._theme.getImageMarginVertial();
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this._theme.getImageTintColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this._theme.getImageTintAlpha(state);
	}

	getImageRotation(state: DBaseStateSet): number {
		return this._theme.getImageRotation(state);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return null;
	}
}
