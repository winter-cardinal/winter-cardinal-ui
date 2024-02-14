import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { DTextPieceTextAlignOptions, DThemeTextPiece } from "./d-text-piece";
import { DTextPieceAlign } from "./d-text-piece-align";
import { toEnum } from "./util/to-enum";

export interface DTextPieceAlignImplParent extends DApplicationTarget {
	toDirty(): void;
}

export class DTextPieceAlignImpl<VALUE> implements DTextPieceAlign {
	protected _parent: DTextPieceAlignImplParent;
	protected _vertical: DAlignVertical;
	protected _horizontal: DAlignHorizontal;

	constructor(
		parent: DTextPieceAlignImplParent,
		theme: DThemeTextPiece<VALUE>,
		options?: DTextPieceTextAlignOptions
	) {
		this._parent = parent;
		this._vertical = toEnum(options?.vertical ?? theme.getTextAlignVertical(), DAlignVertical);
		this._horizontal = toEnum(
			options?.horizontal ?? theme.getTextAlignHorizontal(),
			DAlignHorizontal
		);
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
		vertical?: keyof typeof DAlignVertical | DAlignVertical,
		horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal
	): this {
		let isChanged = false;

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
		const parent = this._parent;
		parent.toDirty();
		DApplications.update(parent);
	}
}
