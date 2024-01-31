import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";

export interface DImagePieceAlignOptions {
	with?: keyof typeof DAlignWith | DAlignWith;
	vertical?: keyof typeof DAlignVertical | DAlignVertical;
	horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal;
}

export interface DImagePieceAlign {
	with: DAlignWith;
	vertical: DAlignVertical;
	horizontal: DAlignHorizontal;
	set(w?: DAlignWith, vertical?: DAlignVertical, horizontal?: DAlignHorizontal): this;
}
