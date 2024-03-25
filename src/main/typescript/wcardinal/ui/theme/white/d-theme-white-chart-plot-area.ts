/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeChartPlotArea } from "../../d-chart-plot-area";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteChartPlotArea extends DThemeWhiteBase implements DThemeChartPlotArea {
	getX(): DCoordinatePosition {
		return "padding";
	}

	getY(): DCoordinatePosition {
		return "padding";
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return "padding";
	}

	getPaddingTop(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getPaddingBottom(): number {
		return 10;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	isOverflowMaskEnabled(): boolean {
		return true;
	}

	getMargin(): number {
		return 20;
	}
}
