/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteChart } from "../theme/default/d-theme-default-chart";
import { DThemeWhiteChartAxisX } from "../theme/default/d-theme-default-chart-axis-x";
import { DThemeWhiteChartAxisXDatetime } from "../theme/default/d-theme-default-chart-axis-x-datetime";
import { DThemeWhiteChartAxisY } from "../theme/default/d-theme-default-chart-axis-y";
import { DThemeWhiteChartCoordinateLinear } from "../theme/default/d-theme-default-chart-coordinate-linear";
import { DThemeWhiteChartCoordinateLog } from "../theme/white/d-theme-white-chart-coordinate-log";
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
	DThemeWhite.set( "DChartCoordinateLog", DThemeWhiteChartCoordinateLog );
	DThemeWhite.set( "DChartLegend", DThemeWhiteChartLegend );
	DThemeWhite.set( "DChartLegendItem", DThemeWhiteChartLegendItem );
	DThemeWhite.set( "DChartOverview", DThemeWhiteChartOverview );
	DThemeWhite.set( "DChartPlotArea", DThemeWhiteChartPlotArea );
};
