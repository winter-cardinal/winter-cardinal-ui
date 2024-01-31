import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseStateSet } from "./d-base-state-set";
import { DThemeImagePiece } from "./d-image-piece";

export interface DThemeImageBaseTertiary {
	getTertiaryImageAlignHorizontal(): DAlignHorizontal;
	getTertiaryImageAlignVertical(): DAlignVertical;
	getTertiaryImageAlignWith(): DAlignWith;
	getTertiaryImageMarginHorizontal(): number;
	getTertiaryImageMarginVertial(): number;
	getTertiaryImageTintColor(state: DBaseStateSet): number | null;
	getTertiaryImageTintAlpha(state: DBaseStateSet): number;
	getTertiaryImageRotation(state: DBaseStateSet): number;
	getTertiaryImageSource?(state: DBaseStateSet): Texture | DisplayObject | null;
}

export class DImageBaseThemeWrapperTertiary implements DThemeImagePiece {
	protected _theme: DThemeImageBaseTertiary;

	constructor(theme: DThemeImageBaseTertiary) {
		this._theme = theme;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return this._theme.getTertiaryImageAlignHorizontal();
	}

	getImageAlignVertical(): DAlignVertical {
		return this._theme.getTertiaryImageAlignVertical();
	}

	getImageAlignWith(): DAlignWith {
		return this._theme.getTertiaryImageAlignWith();
	}

	getImageMarginHorizontal(): number {
		return this._theme.getTertiaryImageMarginHorizontal();
	}

	getImageMarginVertial(): number {
		return this._theme.getTertiaryImageMarginVertial();
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this._theme.getTertiaryImageTintColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this._theme.getTertiaryImageTintAlpha(state);
	}

	getImageRotation(state: DBaseStateSet): number {
		return this._theme.getTertiaryImageRotation(state);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return this._theme.getTertiaryImageSource?.(state) ?? null;
	}
}
