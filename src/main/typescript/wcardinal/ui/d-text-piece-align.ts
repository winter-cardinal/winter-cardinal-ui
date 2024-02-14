import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";

export interface DTextPieceAlign {
	vertical: keyof typeof DAlignVertical | DAlignVertical;
	horizontal: keyof typeof DAlignHorizontal | DAlignHorizontal;

	set(
		vertical?: keyof typeof DAlignVertical | DAlignVertical,
		horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal
	): this;
}
