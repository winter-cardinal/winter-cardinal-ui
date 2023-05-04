/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSetImpl } from "./d-base-state-set-impl";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { DFontStyle, DFontVariant, DFontWeight, DThemeFont } from "./d-font";
import { DThemes } from "./theme/d-themes";
import { toEnum } from "./util/to-enum";

export type DDynamicTextAlign = "left" | "center" | "right";

export interface DDynamicTextStyleOptions {
	align?: DDynamicTextAlign;
	fontFamily?: string;
	fontSize?: number;
	fontStyle?: DFontStyle;
	fontVariant?: DFontVariant;
	fontWeight?: DFontWeight;
	fill?: number;
	clipping?: boolean;
	fitting?: boolean;
	wordWrap?: DDynamicTextStyleWordWrap | keyof typeof DDynamicTextStyleWordWrap;
	lineHeight?: number;
}

export class DDynamicTextStyle {
	protected static DEFAULT_OPTIONS?: Required<DDynamicTextStyleOptions>;

	protected _id: number;
	protected _idApproved: number;
	protected _fontIdId: number;
	protected _fontId: string;
	protected _fontIdApproved: string;
	protected _fontIdFontSize: number;
	protected _align: DDynamicTextAlign;
	protected _fontFamily: string;
	protected _fontSize: number;
	protected _fontSizeFitted: number;
	protected _isFontFitted: boolean;
	protected _fontStyle: DFontStyle;
	protected _fontVariant: DFontVariant;
	protected _fontWeight: DFontWeight;
	protected _fill: number;
	protected _fillApproved: number;
	protected _clipping: boolean;
	protected _fitting: boolean;
	protected _wordWrap: DDynamicTextStyleWordWrap;
	protected _lineHeight: number;
	protected _lineHeightFitted: number;
	protected _onChange: () => void;

	constructor(options: DDynamicTextStyleOptions | undefined, onChange: () => void) {
		this._id = 0;
		this._idApproved = -1;

		const defaultOptions = this.getDefaultOptions();
		if (options) {
			this._align = options.align ?? defaultOptions.align;
			this._fontFamily = options.fontFamily ?? defaultOptions.fontFamily;
			this._fontSize = options.fontSize ?? defaultOptions.fontSize;
			this._fontStyle = options.fontStyle ?? defaultOptions.fontStyle;
			this._fontVariant = options.fontVariant ?? defaultOptions.fontVariant;
			this._fontWeight = options.fontWeight ?? defaultOptions.fontWeight;
			this._fill = options.fill ?? defaultOptions.fill;
			this._clipping = options.clipping ?? defaultOptions.clipping;
			this._fitting = options.fitting ?? defaultOptions.fitting;
			this._wordWrap = toEnum(
				options.wordWrap ?? defaultOptions.wordWrap,
				DDynamicTextStyleWordWrap
			);
			this._lineHeight = options.lineHeight ?? defaultOptions.lineHeight;
		} else {
			this._align = defaultOptions.align;
			this._fontFamily = defaultOptions.fontFamily;
			this._fontSize = defaultOptions.fontSize;
			this._fontStyle = defaultOptions.fontStyle;
			this._fontVariant = defaultOptions.fontVariant;
			this._fontWeight = defaultOptions.fontWeight;
			this._fill = defaultOptions.fill;
			this._clipping = defaultOptions.clipping;
			this._fitting = defaultOptions.fitting;
			this._wordWrap = toEnum(defaultOptions.wordWrap, DDynamicTextStyleWordWrap);
			this._lineHeight = defaultOptions.lineHeight;
		}

		this._fontSizeFitted = this._fontSize;
		this._lineHeightFitted = this._lineHeight;
		this._isFontFitted = false;
		this._fontIdFontSize = this._fontSize;
		this._fontIdId = -1;
		this._fontId = "";
		this._fontIdApproved = "";
		this._fillApproved = 0x000000;

		this._onChange = onChange;
	}

	protected getDefaultOptions(): Required<DDynamicTextStyleOptions> {
		let result = DDynamicTextStyle.DEFAULT_OPTIONS;
		if (result == null) {
			result = this.newDefaultOptions();
			DDynamicTextStyle.DEFAULT_OPTIONS = result;
		}
		return result;
	}

	protected newDefaultOptions(): Required<DDynamicTextStyleOptions> {
		const theme = DThemes.getInstance().get("DBase") as DThemeFont;
		return {
			align: "left",
			fontFamily: theme.getFontFamilly(),
			fontSize: theme.getFontSize(),
			fontStyle: "normal",
			fontVariant: "normal",
			fontWeight: "normal",
			fill: theme.getColor(new DBaseStateSetImpl()),
			clipping: true,
			fitting: false,
			wordWrap: DDynamicTextStyleWordWrap.NONE,
			lineHeight: theme.getLineHeight()
		};
	}

	get id(): number {
		return this._id;
	}

	get idApproved(): number {
		return this._idApproved;
	}

	get fontId(): string {
		this.update();
		return this._fontId;
	}

	get fontIdFontSize(): number {
		this.update();
		return this._fontSizeFitted;
	}

	get fontIdApproved(): string {
		return this._fontIdApproved;
	}

	get fill(): number {
		return this._fill;
	}

	set fill(fill: number) {
		if (this._fill !== fill) {
			this._fill = fill;
			this.onChange();
		}
	}

	protected onChange(): void {
		this._id += 1;
		this._onChange();
	}

	get fillApproved(): number {
		return this._fillApproved;
	}

	approve(): void {
		this.update();
		this._idApproved = this._id;
		this._fontIdApproved = this._fontId;
		this._fillApproved = this._fill;
	}

	get fontFamily(): string {
		return this._fontFamily;
	}

	set fontFamily(fontFamily: string) {
		if (this._fontFamily !== fontFamily) {
			this._fontFamily = fontFamily;
			this.onChange();
		}
	}

	get fontSize(): number {
		return this._fontSize;
	}

	set fontSize(fontSize: number) {
		if (this._fontSize !== fontSize) {
			this._fontSize = fontSize;
			this._fontSizeFitted = fontSize;
			this._lineHeightFitted = this._lineHeight;
			this._isFontFitted = false;
			this.onChange();
		}
	}

	get fontSizeFitted(): number {
		return this._fontSizeFitted;
	}

	get isFontFitted(): boolean {
		return this._isFontFitted;
	}

	get fontStyle(): DFontStyle {
		return this._fontStyle;
	}

	set fontStyle(fontStyle: DFontStyle) {
		if (this._fontStyle !== fontStyle) {
			this._fontStyle = fontStyle;
			this.onChange();
		}
	}

	get fontVariant(): DFontVariant {
		return this._fontVariant;
	}

	set fontVariant(fontVariant: DFontVariant) {
		if (this._fontVariant !== fontVariant) {
			this._fontVariant = fontVariant;
			this.onChange();
		}
	}

	get fontWeight(): DFontWeight {
		return this._fontWeight;
	}

	set fontWeight(fontWeight: DFontWeight) {
		if (this._fontWeight !== fontWeight) {
			this._fontWeight = fontWeight;
			this.onChange();
		}
	}

	protected update(): void {
		if (this._fontIdId !== this._id) {
			this._fontIdId = this._id;
			const fontIdFontSize = this._fitting ? this._fontSizeFitted : this._fontSize;
			this._fontIdFontSize = fontIdFontSize;
			this._fontId = this.toFontId(fontIdFontSize);
		}
	}

	toFontId(fontSize: number): string {
		return `${this._fontStyle} ${this._fontVariant} ${this._fontWeight} ${fontSize}px ${this._fontFamily}`;
	}

	get clipping(): boolean {
		return this._clipping;
	}

	set clipping(clipping: boolean) {
		if (this._clipping !== clipping) {
			this._clipping = clipping;
			this.onChange();
		}
	}

	get fitting(): boolean {
		return this._fitting;
	}

	set fitting(fitting: boolean) {
		if (this._fitting !== fitting) {
			this._fitting = fitting;
			this.onChange();
		}
	}

	get wordWrap(): DDynamicTextStyleWordWrap {
		return this._wordWrap;
	}

	set wordWrap(wordWrap: DDynamicTextStyleWordWrap) {
		if (this._wordWrap !== wordWrap) {
			this._wordWrap = wordWrap;
			this.onChange();
		}
	}

	get lineHeight(): number {
		return this._lineHeight;
	}

	set lineHeight(lineHeight: number) {
		if (this._lineHeight !== lineHeight) {
			this._lineHeight = lineHeight;
			this._fontSizeFitted = this._fontSize;
			this._lineHeightFitted = lineHeight;
			this._isFontFitted = false;
			this.onChange();
		}
	}

	get lineHeightFitted(): number {
		return this._lineHeightFitted;
	}

	set lineHeightFitted(lineHeightFitted: number) {
		if (this._lineHeightFitted !== lineHeightFitted) {
			this._lineHeightFitted = lineHeightFitted;
			this.onChange();
		}
	}

	fit(fontSize: number, lineHeight: number): boolean {
		let isChanged = false;
		if (fontSize < this._fontSizeFitted) {
			this._fontSizeFitted = fontSize;
			isChanged = true;
		}
		if (this._lineHeightFitted !== lineHeight) {
			this._lineHeightFitted = lineHeight;
			isChanged = true;
		}
		if (this._isFontFitted !== true) {
			this._isFontFitted = true;
			isChanged = true;
		}
		if (isChanged) {
			this.onChange();
		}
		return isChanged;
	}

	unfit(): boolean {
		let isChanged = false;
		if (this._isFontFitted !== false) {
			this._isFontFitted = false;
			isChanged = true;
		}
		if (this._fontSizeFitted !== this._fontSize) {
			this._fontSizeFitted = this._fontSize;
			isChanged = true;
		}
		if (this._lineHeightFitted !== this._lineHeight) {
			this._lineHeightFitted = this._lineHeight;
			isChanged = true;
		}
		if (isChanged) {
			this.onChange();
		}
		return isChanged;
	}
}
