import { utils } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DBaseStateSet } from "./d-base-state-set";
import { DDynamicText } from "./d-dynamic-text";
import { DThemeFont } from "./d-font";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTextPieceAlign } from "./d-text-piece-align";
import { DTextPieceStyle, DTextPieceStyleOptions } from "./d-text-piece-style";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";

export interface DTextPieceTextAlignOptions {
	vertical?: keyof typeof DAlignVertical | DAlignVertical;
	horizontal?: keyof typeof DAlignHorizontal | DAlignHorizontal;
}

export type DTextPieceFormatter<VALUE> = (value: VALUE, caller: any) => string;

export interface DTextPieceOptions<VALUE> {
	value?: DStateAwareOrValueMightBe<VALUE>;
	color?: DStateAwareOrValueMightBe<number>;
	alpha?: DStateAwareOrValueMightBe<number>;
	style?: DTextPieceStyleOptions;
	align?: DTextPieceTextAlignOptions;
	formatter?: DTextPieceFormatter<VALUE>;
}

export interface DThemeTextPiece<VALUE> extends DThemeFont {
	getTextFormatter(): DTextPieceFormatter<VALUE>;

	/**
	 * Returns a new text value.
	 * Called to initialize a text value if a text value is not given.
	 */
	newTextValue(): DStateAwareOrValueMightBe<VALUE>;

	/**
	 * Returns a text value.
	 * Called to get a text vale if there is no text value.
	 *
	 * @param state a state
	 */
	getTextValue(state: DBaseStateSet): VALUE | undefined;

	getTextAlignVertical(): DAlignVertical;
	getTextAlignHorizontal(): DAlignHorizontal;
	getTextStyleClipping(): boolean;
	getTextStyleFitting(): boolean;
	getTextStyleWordWrap(): DDynamicTextStyleWordWrap;
	isOverflowMaskEnabled(): boolean;
}

export interface DTextPiece<VALUE> extends utils.EventEmitter {
	value: DStateAwareOrValueMightBe<VALUE>;
	getValue(): DStateAwareOrValueMightBe<VALUE>;
	setValue(value: DStateAwareOrValueMightBe<VALUE>, forcibly?: boolean): void;
	compute(forcibly?: boolean): void;
	formatter: DTextPieceFormatter<VALUE>;
	readonly computed: VALUE | undefined;
	color: DStateAwareOrValueMightBe<number>;
	alpha: DStateAwareOrValueMightBe<number>;
	readonly align: DTextPieceAlign;
	readonly style: DTextPieceStyle;
	readonly object: DDynamicText | null | undefined;

	show(): this;
	hide(): this;
	isShown(): boolean;
	destroy(): this;
}
