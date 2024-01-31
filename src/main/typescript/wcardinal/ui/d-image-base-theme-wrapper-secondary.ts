import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseStateSet } from "./d-base-state-set";
import { DThemeImagePiece } from "./d-image-piece";

export interface DThemeImageBaseSecondary {
	getSecondaryImageAlignHorizontal(): DAlignHorizontal;
	getSecondaryImageAlignVertical(): DAlignVertical;
	getSecondaryImageAlignWith(): DAlignWith;
	getSecondaryImageMarginHorizontal(): number;
	getSecondaryImageMarginVertial(): number;
	getSecondaryImageTintColor(state: DBaseStateSet): number | null;
	getSecondaryImageTintAlpha(state: DBaseStateSet): number;
	getSecondaryImageRotation(state: DBaseStateSet): number;
	getSecondaryImageSource?(state: DBaseStateSet): Texture | DisplayObject | null;
}

export class DImageBaseThemeWrapperSecondary implements DThemeImagePiece {
	protected _theme: DThemeImageBaseSecondary;

	constructor(theme: DThemeImageBaseSecondary) {
		this._theme = theme;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return this._theme.getSecondaryImageAlignHorizontal();
	}

	getImageAlignVertical(): DAlignVertical {
		return this._theme.getSecondaryImageAlignVertical();
	}

	getImageAlignWith(): DAlignWith {
		return this._theme.getSecondaryImageAlignWith();
	}

	getImageMarginHorizontal(): number {
		return this._theme.getSecondaryImageMarginHorizontal();
	}

	getImageMarginVertial(): number {
		return this._theme.getSecondaryImageMarginVertial();
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this._theme.getSecondaryImageTintColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this._theme.getSecondaryImageTintAlpha(state);
	}

	getImageRotation(state: DBaseStateSet): number {
		return this._theme.getSecondaryImageRotation(state);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return this._theme.getSecondaryImageSource?.(state) ?? null;
	}
}
