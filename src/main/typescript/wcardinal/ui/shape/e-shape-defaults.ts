/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { EShapeStrokeSide } from "./e-shape-stroke-side";

export interface EThemeShape {
	getFillColor(): number;
	getFillAlpha(): number;
	getStrokeColor(): number;
	getStrokeAlpha(): number;
	getStrokeWidth(): number;
	getStrokeAlign(): number;
	getStrokeSide(): EShapeStrokeSide;
	getTextValue(): string;
	getTextColor(): number;
	getTextAlpha(): number;
	getTextFamily(): string;
	getTextSize(): number;
	getCursor(): string;
	getRadius(): number;
	getSizeX(): number;
	getSizeY(): number;
	getHighlightColor(): number;
}

export class EShapeDefaults {
	protected static _THEME?: EThemeShape;

	static IS_EDIT_MODE: boolean = false;

	static get THEME(): EThemeShape {
		const theme = this._THEME;
		if( theme != null ) {
			return theme;
		}
		const newTheme: EThemeShape = DThemes.getInstance().get( "EShape" );
		this._THEME = newTheme;
		return newTheme;
	}

	static get FILL_COLOR(): number {
		return this.THEME.getFillColor();
	}

	static get FILL_ALPHA(): number {
		return this.THEME.getFillAlpha();
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

	static get STROKE_SIDE(): number {
		return this.THEME.getStrokeSide();
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

	static get CURSOR(): string {
		return this.THEME.getCursor();
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
}
