/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartAxisBase } from "../../d-chart-axis-base-options";
import { DChartAxisPosition } from "../../d-chart-axis-position";
import { DChartAxisTickPosition } from "../../d-chart-axis-tick-position";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeStrokeSide } from "../../shape/e-shape-stroke-side";
import { EShapeTextAlignHorizontal } from "../../shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../../shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";

export class DThemeWhiteChartAxisBase implements DThemeChartAxisBase {
	getPosition(): DChartAxisPosition {
		return DChartAxisPosition.BOTTOM;
	}

	getPadding(): number {
		return 75;
	}

	getLabelAlignHorizontal(position: DChartAxisPosition): EShapeTextAlignHorizontal {
		switch (position) {
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

	getLabelAlignVertical(position: DChartAxisPosition): EShapeTextAlignVertical {
		switch (position) {
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
		return 50;
	}

	getLabelPaddingVertical(): number {
		return 50;
	}

	getLabelDirection(): EShapeTextDirection {
		return EShapeTextDirection.LEFT_TO_RIGHT;
	}

	getLabelColor(): number | undefined {
		return this.getStrokeColor();
	}

	getStyle(): EShapePointsStyle | undefined {
		return undefined;
	}

	getStrokeEnable(): boolean {
		return true;
	}

	getStrokeColor(): number | undefined {
		return undefined;
	}

	getStrokeAlpha(): number | undefined {
		return undefined;
	}

	getStrokeWidth(): number | undefined {
		return undefined;
	}

	getStrokeAlign(): number | undefined {
		return undefined;
	}

	getStrokeSide(): EShapeStrokeSide | undefined {
		return undefined;
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

	getMajorTickStyle(): EShapePointsStyle | undefined {
		return undefined;
	}

	getMajorTickTextAlignHorizontal(position: DChartAxisPosition): EShapeTextAlignHorizontal {
		switch (position) {
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

	getMajorTickTextAlignVertical(position: DChartAxisPosition): EShapeTextAlignVertical {
		switch (position) {
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

	getMajorTickTextColor(): number | undefined {
		return this.getStrokeColor();
	}

	getMajorTickTextFormat(): string {
		return "%fsi";
	}

	getMajorTickTextPaddingHorizontal(): number {
		return 15;
	}

	getMajorTickTextPaddingVertical(): number {
		return 15;
	}

	getMajorTickStrokeEnable(): boolean | undefined {
		return true;
	}

	getMajorTickStrokeColor(): number | undefined {
		return this.getStrokeColor();
	}

	getMajorTickStrokeAlpha(): number | undefined {
		return this.getStrokeAlpha();
	}

	getMajorTickStrokeWidth(): number | undefined {
		return this.getStrokeWidth();
	}

	getMajorTickStrokeAlign(): number | undefined {
		return this.getStrokeAlign();
	}

	getMajorTickStrokeSide(): EShapeStrokeSide | undefined {
		return this.getStrokeSide();
	}

	getMajorTickGridlineEnable(): boolean {
		return true;
	}

	getMajorTickGridlineStyle(): EShapePointsStyle | undefined {
		return undefined;
	}

	getMajorTickGridlineStrokeEnable(): boolean | undefined {
		return true;
	}

	getMajorTickGridlineStrokeColor(): number | undefined {
		return this.getStrokeColor();
	}

	getMajorTickGridlineStrokeAlpha(): number | undefined {
		return 0.1;
	}

	getMajorTickGridlineStrokeWidth(): number | undefined {
		return this.getStrokeWidth();
	}

	getMajorTickGridlineStrokeAlign(): number | undefined {
		return this.getStrokeAlign();
	}

	getMajorTickGridlineStrokeSide(): EShapeStrokeSide | undefined {
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

	getMinorTickStyle(): EShapePointsStyle | undefined {
		return undefined;
	}

	getMinorTickStrokeEnable(): boolean | undefined {
		return true;
	}

	getMinorTickStrokeColor(): number | undefined {
		return this.getStrokeColor();
	}

	getMinorTickStrokeAlpha(): number | undefined {
		return this.getStrokeAlpha();
	}

	getMinorTickStrokeWidth(): number | undefined {
		return this.getStrokeWidth();
	}

	getMinorTickStrokeAlign(): number | undefined {
		return this.getStrokeAlign();
	}

	getMinorTickStrokeSide(): EShapeStrokeSide | undefined {
		return this.getStrokeSide();
	}
}
