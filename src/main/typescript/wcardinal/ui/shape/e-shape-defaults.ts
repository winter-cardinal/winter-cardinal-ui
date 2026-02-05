/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { EShapeFillDirection } from "./e-shape-fill-direction";
import { EShapeStrokeSide } from "./e-shape-stroke-side";
import { EShapeStrokeStyle } from "./e-shape-stroke-style";

export interface EThemeShape {
	getFillColor(): number;
	getFillAlpha(): number;
	getFillDirection(): EShapeFillDirection;
	getFillPercent(): number;
	getStrokeColor(): number;
	getStrokeAlpha(): number;
	getStrokeWidth(): number;
	getStrokeAlign(): number;
	getStrokeSide(): EShapeStrokeSide;
	getStrokeStyle(): EShapeStrokeStyle;
	getTextValue(): string;
	getTextColor(): number;
	getTextAlpha(): number;
	getTextFamily(): string;
	getTextSize(): number;
	getRadius(): number;
	getSizeX(): number;
	getSizeY(): number;
	getHighlightColor(): number;
	getCurveSegmentCount(): number;
}

export class EShapeDefaults {
	protected static _THEME?: EThemeShape;

	static get THEME(): EThemeShape {
		const theme = this._THEME;
		if (theme != null) {
			return theme;
		}
		const newTheme: EThemeShape = DThemes.getInstance().get("EShape");
		this._THEME = newTheme;
		return newTheme;
	}

	static get FILL_COLOR(): number {
		return this.THEME.getFillColor();
	}

	static get FILL_ALPHA(): number {
		return this.THEME.getFillAlpha();
	}

	static get FILL_DIRECTION(): EShapeFillDirection {
		return this.THEME.getFillDirection();
	}

	static get FILL_PERCENT(): number {
		return this.THEME.getFillPercent();
	}

	static get STROKE_COLOR(): number {
		return this.THEME.getStrokeColor();
	}

	static get STROKE_ALPHA(): number {
		return this.THEME.getStrokeAlpha();
	}

	static get STROKE_WIDTH(): number {
		return this.THEME.getStrokeWidth();
	}

	static get STROKE_ALIGN(): number {
		return this.THEME.getStrokeAlign();
	}

	static get STROKE_SIDE(): EShapeStrokeSide {
		return this.THEME.getStrokeSide();
	}

	static get STROKE_STYLE(): EShapeStrokeStyle {
		return this.THEME.getStrokeStyle();
	}

	static get TEXT_VALUE(): string {
		return this.THEME.getTextValue();
	}

	static get TEXT_COLOR(): number {
		return this.THEME.getTextColor();
	}

	static get TEXT_ALPHA(): number {
		return this.THEME.getTextAlpha();
	}

	static get TEXT_FAMILY(): string {
		return this.THEME.getTextFamily();
	}

	static get TEXT_SIZE(): number {
		return this.THEME.getTextSize();
	}

	static get RADIUS(): number {
		return this.THEME.getRadius();
	}

	static get SIZE_X(): number {
		return this.THEME.getSizeX();
	}

	static get SIZE_Y(): number {
		return this.THEME.getSizeY();
	}

	static get HIGHLIGHT_COLOR(): number {
		return this.THEME.getHighlightColor();
	}

	static get CURVE_SEGMENT_COUNT(): number {
		return this.THEME.getCurveSegmentCount();
	}
}
