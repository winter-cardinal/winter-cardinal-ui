/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeChartPlotArea } from "../../d-chart-plot-area";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkChartPlotArea extends DThemeDarkBase implements DThemeChartPlotArea {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return "100%";
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

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	isOverflowMaskEnabled(): boolean {
		return true;
	}
}
