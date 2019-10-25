/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteChart } from "../theme/white/d-theme-white-chart";
import { DThemeWhiteChartAxisX } from "../theme/white/d-theme-white-chart-axis-x";
import { DThemeWhiteChartAxisY } from "../theme/white/d-theme-white-chart-axis-y";
import { DThemeWhiteChartCoordinateLinear } from "../theme/white/d-theme-white-chart-coordinate-linear";

export const loadThemeWhiteChart = () => {
	DThemeWhite.set( "DChart", DThemeWhiteChart );
	DThemeWhite.set( "DChartAxisX", DThemeWhiteChartAxisX );
	DThemeWhite.set( "DChartAxisY", DThemeWhiteChartAxisY );
	DThemeWhite.set( "DChartCoordinateLinear", DThemeWhiteChartCoordinateLinear );
};
