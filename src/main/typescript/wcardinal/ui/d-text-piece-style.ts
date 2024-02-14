import { DDynamicTextStyleOptions } from "./d-dynamic-text-style";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { DFontStyle, DFontVariant, DFontWeight } from "./d-font";

export interface DTextPieceStyleOptions extends DDynamicTextStyleOptions {}

export interface DTextPieceStyle {
	fontFamily: string;
	fontSize: number;
	fontStyle: DFontStyle;
	fontVariant: DFontVariant;
	fontWeight: DFontWeight;
	clipping: boolean;
	fitting: boolean;
	wordWrap: DDynamicTextStyleWordWrap | keyof typeof DDynamicTextStyleWordWrap;
	lineHeight: number;
}
