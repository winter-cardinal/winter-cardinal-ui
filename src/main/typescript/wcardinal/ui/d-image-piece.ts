import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseStateSet } from "./d-base-state-set";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DImagePieceTint, DImagePieceTintOptions } from "./d-image-piece-tint";
import { DImagePieceMargin, DImagePieceMarginOptions } from "./d-image-piece-margin";
import { DImagePieceAlign, DImagePieceAlignOptions } from "./d-image-piece-align";

export interface DImagePieceOptions {
	source?: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	tint?: DImagePieceTintOptions;
	align?: DImagePieceAlignOptions;
	margin?: DImagePieceMarginOptions;
	rotation?: DStateAwareOrValueMightBe<number>;
}

export interface DThemeImagePiece {
	getImageAlignHorizontal(): DAlignHorizontal;
	getImageAlignVertical(): DAlignVertical;
	getImageAlignWith(): DAlignWith;
	getImageMarginHorizontal(): number;
	getImageMarginVertial(): number;
	getImageTintColor(state: DBaseStateSet): number | null;
	getImageTintAlpha(state: DBaseStateSet): number;
	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null;
	getImageRotation(state: DBaseStateSet): number;
}

export interface DImagePiece {
	readonly object: DisplayObject | null;
	readonly align: DImagePieceAlign;
	readonly margin: DImagePieceMargin;
	readonly tint: DImagePieceTint;
	source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	rotation: DStateAwareOrValueMightBe<number>;
	destroy(): void;
}
