/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DFontStyle, DFontVariant, DFontWeight } from "./d-font";
import { DTextPieceStyle } from "./d-text-piece-style";
import { DDynamicTextStyle } from "./d-dynamic-text-style";
import { DApplications } from "./d-applications";
import { DApplicationTarget } from "./d-application-like";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { toEnum } from "./util/to-enum";

export class DTextPieceStyleImpl implements DTextPieceStyle {
	protected _parent: DApplicationTarget;
	protected _style: DDynamicTextStyle;

	constructor(parent: DApplicationTarget, style: DDynamicTextStyle) {
		this._parent = parent;
		this._style = style;
	}

	get fontFamily(): string {
		return this._style.fontFamily;
	}

	set fontFamily(fontFamily: string) {
		const style = this._style;
		if (style.fontFamily !== fontFamily) {
			style.fontFamily = fontFamily;
			this.onChange();
		}
	}

	get fontSize(): number {
		return this._style.fontSize;
	}

	set fontSize(fontSize: number) {
		const style = this._style;
		if (style.fontSize !== fontSize) {
			style.fontSize = fontSize;
			this.onChange();
		}
	}

	get fontStyle(): DFontStyle {
		return this._style.fontStyle;
	}

	set fontStyle(fontStyle: DFontStyle) {
		const style = this._style;
		if (style.fontStyle !== fontStyle) {
			style.fontStyle = fontStyle;
			this.onChange();
		}
	}

	get fontVariant(): DFontVariant {
		return this._style.fontVariant;
	}

	set fontVariant(fontVariant: DFontVariant) {
		const style = this._style;
		if (style.fontVariant !== fontVariant) {
			style.fontVariant = fontVariant;
			this.onChange();
		}
	}

	get fontWeight(): DFontWeight {
		return this._style.fontWeight;
	}

	set fontWeight(fontWeight: DFontWeight) {
		const style = this._style;
		if (style.fontWeight !== fontWeight) {
			style.fontWeight = fontWeight;
			this.onChange();
		}
	}

	get clipping(): boolean {
		return this._style.clipping;
	}

	set clipping(clipping: boolean) {
		const style = this._style;
		if (style.clipping !== clipping) {
			style.clipping = clipping;
			this.onChange();
		}
	}

	get fitting(): boolean {
		return this._style.fitting;
	}

	set fitting(fitting: boolean) {
		const style = this._style;
		if (style.fitting !== fitting) {
			style.fitting = fitting;
			this.onChange();
		}
	}

	get wordWrap(): DDynamicTextStyleWordWrap {
		return this._style.wordWrap;
	}

	set wordWrap(wordWrap: DDynamicTextStyleWordWrap | keyof typeof DDynamicTextStyleWordWrap) {
		wordWrap = toEnum(wordWrap, DDynamicTextStyleWordWrap);
		const style = this._style;
		if (style.wordWrap !== wordWrap) {
			style.wordWrap = wordWrap;
			this.onChange();
		}
	}

	get lineHeight(): number {
		return this._style.lineHeight;
	}

	set lineHeight(lineHeight: number) {
		const style = this._style;
		if (style.lineHeight !== lineHeight) {
			style.lineHeight = lineHeight;
			this.onChange();
		}
	}

	protected onChange(): void {
		DApplications.update(this._parent);
	}
}
