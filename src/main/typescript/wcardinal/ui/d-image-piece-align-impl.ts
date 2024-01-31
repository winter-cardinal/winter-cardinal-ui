import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { toEnum } from "./util/to-enum";
import { DThemeImagePiece } from "./d-image-piece";
import { DImagePieceAlign, DImagePieceAlignOptions } from "./d-image-piece-align";

export interface DImagePieceAlignImplParent {
	onUpdate(): void;
}

export class DImagePieceAlignImpl implements DImagePieceAlign {
	protected _parent: DImagePieceAlignImplParent;
	protected _with: DAlignWith;
	protected _vertical: DAlignVertical;
	protected _horizontal: DAlignHorizontal;

	constructor(
		parent: DImagePieceAlignImplParent,
		theme: DThemeImagePiece,
		options?: DImagePieceAlignOptions
	) {
		this._parent = parent;
		this._with = toEnum(options?.with ?? theme.getImageAlignWith(), DAlignWith);
		this._vertical = toEnum(options?.vertical ?? theme.getImageAlignVertical(), DAlignVertical);
		this._horizontal = toEnum(
			options?.horizontal ?? theme.getImageAlignHorizontal(),
			DAlignHorizontal
		);
	}

	get with(): DAlignWith {
		return this._with;
	}

	set with(w: keyof typeof DAlignWith | DAlignWith) {
		w = toEnum(w, DAlignWith);
		if (this._with !== w) {
			this._with = w;
			this.onChange();
		}
	}

	get vertical(): DAlignVertical {
		return this._vertical;
	}

	set vertical(vertical: keyof typeof DAlignVertical | DAlignVertical) {
		vertical = toEnum(vertical, DAlignVertical);
		if (this._vertical !== vertical) {
			this._vertical = vertical;
			this.onChange();
		}
	}

	get horizontal(): DAlignHorizontal {
		return this._horizontal;
	}

	set horizontal(horizontal: keyof typeof DAlignHorizontal | DAlignHorizontal) {
		horizontal = toEnum(horizontal, DAlignHorizontal);
		if (this._horizontal !== horizontal) {
			this._horizontal = horizontal;
			this.onChange();
		}
	}

	set(
		w?: keyof typeof DAlignWith | DAlignWith,
		vertical?: keyof typeof DAlignVertical | DAlignVertical,
		horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal
	): this {
		let isChanged = false;
		if (w != null) {
			w = toEnum(w, DAlignWith);
			if (this._with !== w) {
				this._with = w;
				isChanged = true;
			}
		}
		if (vertical != null) {
			vertical = toEnum(vertical, DAlignVertical);
			if (this._vertical !== vertical) {
				this._vertical = vertical;
				isChanged = true;
			}
		}
		if (horizontal != null) {
			horizontal = toEnum(horizontal, DAlignHorizontal);
			if (this._horizontal !== horizontal) {
				this._horizontal = horizontal;
				isChanged = true;
			}
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
