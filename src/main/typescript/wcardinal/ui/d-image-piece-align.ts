import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";

export interface DImagePieceAlignOptions {
	with?: keyof typeof DAlignWith | DAlignWith;
	vertical?: keyof typeof DAlignVertical | DAlignVertical;
	horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal;
}

export interface DImagePieceAlign {
	with: keyof typeof DAlignWith | DAlignWith;
	vertical: keyof typeof DAlignVertical | DAlignVertical;
	horizontal: keyof typeof DAlignHorizontal | DAlignHorizontal;
	set(
		w?: keyof typeof DAlignWith | DAlignWith,
		vertical?: keyof typeof DAlignVertical | DAlignVertical,
		horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal
	): this;
}
