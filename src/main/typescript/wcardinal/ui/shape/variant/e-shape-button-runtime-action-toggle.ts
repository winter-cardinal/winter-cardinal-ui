/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";
import { EShapeActionRuntime } from "../action";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeStateSet } from "../e-shape-state-set";

export class EShapeButtonRuntimeActionToggle extends EShapeActionRuntime {
	protected readonly _fillColorActive: number;
	protected readonly _fillColorActivePressed: number;
	protected readonly _fillColorActiveHovered: number;
	protected readonly _fillColor: number;
	protected readonly _fillColorPressed: number;
	protected readonly _fillColorHovered: number;

	protected readonly _fillAlpha: number;
	protected readonly _fillAlphaDisabled: number;

	protected readonly _strokeColorActive: number;
	protected readonly _strokeColorActivePressed: number;
	protected readonly _strokeColorActiveHovered: number;
	protected readonly _strokeColor: number;
	protected readonly _strokeColorPressed: number;
	protected readonly _strokeColorGrayscaleHovered: number;

	protected readonly _strokeAlpha: number;
	protected readonly _strokeAlphaDisabled: number;

	protected readonly _textColorActive: number;
	protected readonly _textColor: number;
	protected readonly _textColorDisabled: number;

	protected readonly _textAlpha: number;
	protected readonly _textAlphaDisabled: number;

	protected readonly _textOutlineColor: number;
	protected readonly _textOutlineColorDisabled: number;

	protected readonly _textOutlineAlpha: number;
	protected readonly _textOutlineAlphaDisabled: number;

	constructor(runtime: EShapeRuntime) {
		super(
			EShapeRuntimeReset.COLOR_FILL_AND_STROKE |
				EShapeRuntimeReset.COLOR_TEXT |
				EShapeRuntimeReset.COLOR_TEXT_OUTLINE
		);

		const fill = runtime.fill;
		const fillColorActive = fill.color;
		this._fillColorActive = fillColorActive;
		const fillColorActiveOnHovered = this.toOnHovered(fillColorActive);
		const fillColorActiveOnPressed = fillColorActiveOnHovered * 2;
		this._fillColorActivePressed = UtilRgb.darken(fillColorActive, fillColorActiveOnPressed);
		this._fillColorActiveHovered = UtilRgb.darken(fillColorActive, fillColorActiveOnHovered);
		const fillColor = 0xe7e5e7;
		this._fillColor = fillColor;
		const fillColorOnHovered = this.toOnHovered(fillColor);
		const fillColorOnPressed = fillColorOnHovered * 2;
		this._fillColorPressed = UtilRgb.darken(fillColor, fillColorOnPressed);
		this._fillColorHovered = UtilRgb.darken(fillColor, fillColorOnHovered);

		const fillAlpha = fill.alpha;
		this._fillAlpha = fillAlpha;
		this._fillAlphaDisabled = fillAlpha * 0.5;

		const stroke = runtime.stroke;
		const strokeColorActive = stroke.color;
		this._strokeColorActive = strokeColorActive;
		const strokeColorActiveOnHovered = this.toOnHovered(strokeColorActive);
		const strokeColorActiveOnPressed = strokeColorActiveOnHovered * 2;
		this._strokeColorActivePressed = UtilRgb.darken(
			strokeColorActive,
			strokeColorActiveOnPressed
		);
		this._strokeColorActiveHovered = UtilRgb.darken(
			strokeColorActive,
			strokeColorActiveOnHovered
		);
		const strokeColor = 0xe7e5e7;
		this._strokeColor = strokeColor;
		const strokeColorOnHovered = this.toOnHovered(strokeColor);
		const strokeColorOnPressed = strokeColorOnHovered * 2;
		this._strokeColorPressed = UtilRgb.darken(strokeColor, strokeColorOnPressed);
		this._strokeColorGrayscaleHovered = UtilRgb.darken(strokeColor, strokeColorOnHovered);

		const strokeAlpha = stroke.alpha;
		this._strokeAlpha = strokeAlpha;
		this._strokeAlphaDisabled = strokeAlpha * 0.5;

		const text = runtime.text;
		const textColor = text.color;
		this._textColorActive = textColor;
		this._textColorDisabled = UtilRgb.toGrayscale(textColor);
		this._textColor = 0x4f4f4f;

		const textAlpha = text.alpha;
		this._textAlpha = textAlpha;
		this._textAlphaDisabled = textAlpha * 0.5;

		const textOutline = text.outline;
		const textOutlineColor = textOutline.color;
		this._textOutlineColor = textOutlineColor;
		this._textOutlineColorDisabled = UtilRgb.toGrayscale(textOutlineColor);

		const textOutlineAlpha = textOutline.alpha;
		this._textOutlineAlpha = textOutlineAlpha;
		this._textOutlineAlphaDisabled = textOutlineAlpha * 0.5;
	}

	protected toOnHovered(color: number): number {
		const luma = UtilRgb.toLuma(color);
		if (128 <= luma) {
			const t = (luma - 128) / 127;
			return +0.15 * (1 - t) + t * 0.03;
		} else {
			const t = (127 - luma) / 127;
			return -0.15 * (1 - t) - t * 0.175;
		}
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const state = shape.state;
		shape.fill.set(undefined, this.getFillColor(state), this.getFillAlpha(state));
		shape.stroke.set(undefined, this.getStrokeColor(state), this.getStrokeAlpha(state));
		shape.text.set(undefined, this.getTextColor(state), this.getTextAlpha(state));
		shape.text.outline.set(
			undefined,
			this.getTextOutlineColor(state),
			this.getTextOutlineAlpha(state)
		);
		shape.cursor = this.getCursor(state);
		runtime.written |= EShapeRuntimeReset.COLOR_FILL_AND_STROKE;
	}

	protected getFillColor(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._fillColor;
		} else if (state.isActive) {
			if (state.isPressed) {
				return this._fillColorActivePressed;
			} else if (state.isFocused || state.isHovered) {
				return this._fillColorActiveHovered;
			} else {
				return this._fillColorActive;
			}
		} else {
			if (state.isPressed) {
				return this._fillColorPressed;
			} else if (state.isFocused || state.isHovered) {
				return this._fillColorHovered;
			} else {
				return this._fillColor;
			}
		}
	}

	protected getFillAlpha(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._fillAlphaDisabled;
		} else {
			return this._fillAlpha;
		}
	}

	protected getStrokeColor(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._strokeColor;
		} else if (state.isActive) {
			if (state.isPressed) {
				return this._strokeColorActivePressed;
			} else if (state.isFocused || state.isHovered) {
				return this._strokeColorActiveHovered;
			} else {
				return this._strokeColorActive;
			}
		} else {
			if (state.isPressed) {
				return this._strokeColorPressed;
			} else if (state.isFocused || state.isHovered) {
				return this._strokeColorGrayscaleHovered;
			} else {
				return this._strokeColor;
			}
		}
	}

	protected getStrokeAlpha(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._strokeAlphaDisabled;
		} else {
			return this._strokeAlpha;
		}
	}

	protected getTextColor(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._textColorDisabled;
		} else if (state.isActive) {
			return this._textColorActive;
		} else {
			return this._textColor;
		}
	}

	protected getTextAlpha(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._textAlphaDisabled;
		} else {
			return this._textAlpha;
		}
	}

	protected getTextOutlineColor(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._textOutlineColorDisabled;
		} else {
			return this._textOutlineColor;
		}
	}

	protected getTextOutlineAlpha(state: EShapeStateSet): number {
		if (state.inDisabled) {
			return this._textOutlineAlphaDisabled;
		} else {
			return this._textOutlineAlpha;
		}
	}

	getCursor(state: EShapeStateSet): string {
		if (state.isActionable) {
			return "pointer";
		}
		return "";
	}
}
