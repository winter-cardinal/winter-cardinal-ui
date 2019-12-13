/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteChart } from "../theme/white/d-theme-white-chart";
import { DThemeWhiteChartAxisX } from "../theme/white/d-theme-white-chart-axis-x";
import { DThemeWhiteChartAxisXDatetime } from "../theme/white/d-theme-white-chart-axis-x-datetime";
import { DThemeWhiteChartAxisY } from "../theme/white/d-theme-white-chart-axis-y";
import { DThemeWhiteChartCoordinateLinear } from "../theme/white/d-theme-white-chart-coordinate-linear";
import { DThemeWhiteChartLegend } from "../theme/white/d-theme-white-chart-legend";
import { DThemeWhiteChartLegendItem } from "../theme/white/d-theme-white-chart-legend-item";
import { DThemeWhiteChartOverview } from "../theme/white/d-theme-white-chart-overview";
import { DThemeWhiteChartPlotArea } from "../theme/white/d-theme-white-chart-plot-area";

export const loadThemeWhiteChart = () => {
	DThemeWhite.set( "DChart", DThemeWhiteChart );
	DThemeWhite.set( "DChartAxisX", DThemeWhiteChartAxisX );
	DThemeWhite.set( "DChartAxisXDatetime", DThemeWhiteChartAxisXDatetime );
	DThemeWhite.set( "DChartAxisY", DThemeWhiteChartAxisY );
	DThemeWhite.set( "DChartCoordinateLinear", DThemeWhiteChartCoordinateLinear );
	DThemeWhite.set( "DChartLegend", DThemeWhiteChartLegend );
	DThemeWhite.set( "DChartLegendItem", DThemeWhiteChartLegendItem );
	DThemeWhite.set( "DChartOverview", DThemeWhiteChartOverview );
	DThemeWhite.set( "DChartPlotArea", DThemeWhiteChartPlotArea );
};
