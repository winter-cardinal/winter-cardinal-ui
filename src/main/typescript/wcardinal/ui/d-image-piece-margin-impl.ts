import { DThemeImagePiece } from "./d-image-piece";
import { DImagePieceMargin, DImagePieceMarginOptions } from "./d-image-piece-margin";

export interface DImagePieceMarginImplParent {
	onUpdate(): void;
}

export class DImagePieceMarginImpl implements DImagePieceMargin {
	protected _parent: DImagePieceMarginImplParent;
	protected _vertical: number;
	protected _horizontal: number;

	constructor(
		parent: DImagePieceMarginImplParent,
		theme: DThemeImagePiece,
		options?: DImagePieceMarginOptions
	) {
		this._parent = parent;
		this._vertical = options?.vertical ?? theme.getImageMarginVertial();
		this._horizontal = options?.horizontal ?? theme.getImageMarginHorizontal();
	}

	get vertical(): number {
		return this._vertical;
	}

	set vertical(vertical: number) {
		if (this._vertical !== vertical) {
			this._vertical = vertical;
			this.onChange();
		}
	}

	get horizontal(): number {
		return this._horizontal;
	}

	set horizontal(horizontal: number) {
		if (this._horizontal !== horizontal) {
			this._horizontal = horizontal;
			this.onChange();
		}
	}

	set(vertical?: number, horizontal?: number): this {
		let isChanged = false;
		if (vertical != null && this._vertical !== vertical) {
			this._vertical = vertical;
			isChanged = true;
		}
		if (horizontal != null && this._horizontal !== horizontal) {
			this._horizontal = horizontal;
			isChanged = true;
		}
		if (isChanged) {
			this.onChange();
		}
		return this;
	}

	protected onChange(): void {
		this._parent.onUpdate();
	}
}
