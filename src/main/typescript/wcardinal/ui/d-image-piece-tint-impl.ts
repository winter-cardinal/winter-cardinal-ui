import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";
import { DThemeImagePiece } from "./d-image-piece";
import { DImagePieceTint, DImagePieceTintOptions } from "./d-image-piece-tint";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";

export interface DImagePieceTintParent extends DApplicationTarget {
	updateTint(): void;
}

export class DImagePieceTintImpl implements DImagePieceTint {
	protected _parent: DImagePieceTintParent;
	protected _color?: DStateAwareOrValueMightBe<number | null>;
	protected _alpha?: DStateAwareOrValueMightBe<number>;
	protected _theme: DThemeImagePiece;

	constructor(
		parent: DImagePieceTintParent,
		theme: DThemeImagePiece,
		options?: DImagePieceTintOptions
	) {
		this._parent = parent;
		if (options != null) {
			this._color = options.color;
			this._alpha = options.alpha;
		}
		this._theme = theme;
	}

	get color(): DStateAwareOrValueMightBe<number | null> {
		return this._color;
	}

	set color(color: DStateAwareOrValueMightBe<number | null>) {
		if (this._color !== color) {
			this._color = color;
			this.onChange();
		}
	}

	getColor(state: DBaseStateSet): number | null {
		const color = this._color;
		if (color !== undefined) {
			if (isFunction(color)) {
				const result = color(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return color;
			}
		}
		return this._theme.getImageTintColor(state);
	}

	get alpha(): DStateAwareOrValueMightBe<number> {
		return this._alpha;
	}

	set alpha(alpha: DStateAwareOrValueMightBe<number>) {
		if (this._alpha !== alpha) {
			this._alpha = alpha;
			this.onChange();
		}
	}

	getAlpha(state: DBaseStateSet): number {
		const alpha = this._alpha;
		if (alpha !== undefined) {
			if (isFunction(alpha)) {
				const result = alpha(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return alpha;
			}
		}
		return this._theme.getImageTintAlpha(state);
	}

	set(
		color?: DStateAwareOrValueMightBe<number | null>,
		alpha?: DStateAwareOrValueMightBe<number>
	): this {
		let isChanged = false;
		if (color != null && this._color !== color) {
			this._color = color;
			isChanged = true;
		}
		if (alpha != null && this._alpha !== alpha) {
			this._alpha = alpha;
			isChanged = true;
		}
		if (isChanged) {
			this.onChange();
		}
		return this;
	}

	protected onChange(): void {
		this._parent.updateTint();
		DApplications.update(this._parent);
	}
}
