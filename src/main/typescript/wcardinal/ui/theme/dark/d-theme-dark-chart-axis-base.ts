/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartAxisBase } from "../../d-chart-axis-base-options";
import { DChartAxisPosition } from "../../d-chart-axis-position";
import { DChartAxisTickPosition } from "../../d-chart-axis-tick-position";
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeStrokeSide } from "../../shape/e-shape-stroke-side";
import { EShapeTextAlignHorizontal } from "../../shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../../shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";

export class DThemeDarkChartAxisBase implements DThemeChartAxisBase {
	getPosition(): DChartAxisPosition {
		return DChartAxisPosition.BOTTOM;
	}

	getPadding(): number {
		return 75;
	}

	getLabelAlignHorizontal( position: DChartAxisPosition ): EShapeTextAlignHorizontal {
		switch( position ) {
		case DChartAxisPosition.TOP:
			return EShapeTextAlignHorizontal.CENTER;
		case DChartAxisPosition.BOTTOM:
			return EShapeTextAlignHorizontal.CENTER;
		case DChartAxisPosition.LEFT:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
		case DChartAxisPosition.RIGHT:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
		}
	}

	getLabelAlignVertical( position: DChartAxisPosition ): EShapeTextAlignVertical {
		switch( position ) {
		case DChartAxisPosition.TOP:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
		case DChartAxisPosition.BOTTOM:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
		case DChartAxisPosition.LEFT:
			return EShapeTextAlignVertical.MIDDLE;
		case DChartAxisPosition.RIGHT:
			return EShapeTextAlignVertical.MIDDLE;
		}
	}

	getLabelPaddingHorizontal(): number {
		return 75;
	}

	getLabelPaddingVertical(): number {
		return 50;
	}

	getLabelDirection(): EShapeTextDirection {
		return EShapeTextDirection.LEFT_TO_RIGHT;
	}

	getStyle(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	getStrokeEnable(): boolean {
		return true;
	}

	getStrokeColor(): number {
		return EShapeDefaults.STROKE_COLOR;
	}

	getStrokeAlpha(): number {
		return EShapeDefaults.STROKE_ALPHA;
	}

	getStrokeWidth(): number {
		return EShapeDefaults.STROKE_WIDTH;
	}

	getStrokeAlign(): number {
		return EShapeDefaults.STROKE_ALIGN;
	}

	getStrokeSide(): EShapeStrokeSide {
		return EShapeStrokeSide.ALL;
	}

	getTickEnable(): boolean {
		return true;
	}

	getMajorTickCount(): number {
		return 3;
	}

	getMajorTickSize(): number {
		return 10;
	}

	getMajorTickPosition(): DChartAxisTickPosition {
		return DChartAxisTickPosition.OUTSIDE;
	}

	getMajorTickStyle(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	getMajorTickTextAlignHorizontal( position: DChartAxisPosition ): EShapeTextAlignHorizontal {
		switch( position ) {
		case DChartAxisPosition.TOP:
			return EShapeTextAlignHorizontal.CENTER;
		case DChartAxisPosition.BOTTOM:
			return EShapeTextAlignHorizontal.CENTER;
		case DChartAxisPosition.LEFT:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
		case DChartAxisPosition.RIGHT:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
		}
	}

	getMajorTickTextAlignVertical( position: DChartAxisPosition ): EShapeTextAlignVertical {
		switch( position ) {
		case DChartAxisPosition.TOP:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
		case DChartAxisPosition.BOTTOM:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
		case DChartAxisPosition.LEFT:
			return EShapeTextAlignVertical.MIDDLE;
		case DChartAxisPosition.RIGHT:
			return EShapeTextAlignVertical.MIDDLE;
		}
	}

	getMajorTickTextDirection(): EShapeTextDirection {
		return EShapeTextDirection.LEFT_TO_RIGHT;
	}

	getMajorTickTextFormat(): string {
		return "%ssi";
	}

	getMajorTickTextPaddingHorizontal(): number {
		return 15;
	}

	getMajorTickTextPaddingVertical(): number {
		return 15;
	}

	getMajorTickStrokeEnable(): boolean {
		return true;
	}

	getMajorTickStrokeColor(): number {
		return this.getStrokeColor();
	}

	getMajorTickStrokeAlpha(): number {
		return this.getStrokeAlpha();
	}

	getMajorTickStrokeWidth(): number {
		return this.getStrokeWidth();
	}

	getMajorTickStrokeAlign(): number {
		return this.getStrokeAlign();
	}

	getMajorTickStrokeSide(): EShapeStrokeSide {
		return this.getStrokeSide();
	}

	getMajorTickGridlineEnable(): boolean {
		return true;
	}

	getMajorTickGridlineStyle(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	getMajorTickGridlineStrokeEnable(): boolean {
		return true;
	}

	getMajorTickGridlineStrokeColor(): number {
		return this.getStrokeColor();
	}

	getMajorTickGridlineStrokeAlpha(): number {
		return 0.1;
	}

	getMajorTickGridlineStrokeWidth(): number {
		return this.getStrokeWidth();
	}

	getMajorTickGridlineStrokeAlign(): number {
		return this.getStrokeAlign();
	}

	getMajorTickGridlineStrokeSide(): EShapeStrokeSide {
		return this.getStrokeSide();
	}

	getMinorTickCount(): number {
		return 3;
	}

	getMinorTickSize(): number {
		return 5;
	}

	getMinorTickPosition(): DChartAxisTickPosition {
		return DChartAxisTickPosition.OUTSIDE;
	}

	getMinorTickStyle(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	getMinorTickStrokeEnable(): boolean {
		return true;
	}

	getMinorTickStrokeColor(): number {
		return this.getStrokeColor();
	}

	getMinorTickStrokeAlpha(): number {
		return this.getStrokeAlpha();
	}

	getMinorTickStrokeWidth(): number {
		return this.getStrokeWidth();
	}

	getMinorTickStrokeAlign(): number {
		return this.getStrokeAlign();
	}

	getMinorTickStrokeSide(): EShapeStrokeSide {
		return this.getStrokeSide();
	}
}
