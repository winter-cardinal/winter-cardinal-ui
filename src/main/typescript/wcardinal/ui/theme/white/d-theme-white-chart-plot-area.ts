/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeChartPlotArea } from "../../d-chart-plot-area";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteChartPlotArea extends DThemeWhiteBase implements DThemeChartPlotArea {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}
}
