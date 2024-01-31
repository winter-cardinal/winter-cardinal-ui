import { DThemeImageBaseSecondary } from "./d-image-base-theme-wrapper-secondary";
import { DThemeImageBaseTertiary } from "./d-image-base-theme-wrapper-tertiary";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";

export interface DThemeImagePieceContainer
	extends DThemeImagePiece,
		DThemeImageBaseSecondary,
		DThemeImageBaseTertiary {}

export interface DImagePieceContainer {
	add(options?: DImagePieceOptions): DImagePiece;
	get(index: number): DImagePiece | null;
	remove(index: number): boolean;
	size(): number;
	destroy(): void;
}
