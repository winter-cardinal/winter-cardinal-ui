/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisPosition, DChartAxisTickPosition } from "../../d-chart-axis";
import { DThemeChartAxisBase } from "../../d-chart-axis-base-options";
import { EShapePointsStyle } from "../../shape/e-shape-points";
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
		return 50;
	}

	getLabelPaddingVertical(): number {
		return 50;
	}

	getLabelDirection(): EShapeTextDirection {
		return EShapeTextDirection.LEFT_TO_RIGHT;
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
}
