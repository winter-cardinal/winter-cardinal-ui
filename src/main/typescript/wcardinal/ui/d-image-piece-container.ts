import { DisplayObject, Texture } from "pixi.js";
import { DThemeImageBaseSecondary } from "./d-image-base-theme-wrapper-secondary";
import { DThemeImageBaseTertiary } from "./d-image-base-theme-wrapper-tertiary";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";
import { DImagePieceAlign } from "./d-image-piece-align";
import { DImagePieceMargin } from "./d-image-piece-margin";
import { DImagePieceTint } from "./d-image-piece-tint";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DThemeImagePieceContainer
	extends DThemeImagePiece,
		DThemeImageBaseSecondary,
		DThemeImageBaseTertiary {}

export interface DImagePieceContainer {
	readonly object: DisplayObject | null;
	readonly align: DImagePieceAlign;
	readonly margin: DImagePieceMargin;
	readonly tint: DImagePieceTint;
	source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	rotation: DStateAwareOrValueMightBe<number>;

	add(options?: DImagePieceOptions): DImagePiece;
	get(index: number): DImagePiece | null;
	remove(index: number): boolean;
	size(): number;
	destroy(): void;
}
