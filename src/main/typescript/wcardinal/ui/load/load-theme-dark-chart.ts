/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkChart } from "../theme/dark/d-theme-dark-chart";
import { DThemeDarkChartAxisX } from "../theme/dark/d-theme-dark-chart-axis-x";
import { DThemeDarkChartAxisXDatetime } from "../theme/dark/d-theme-dark-chart-axis-x-datetime";
import { DThemeDarkChartAxisY } from "../theme/dark/d-theme-dark-chart-axis-y";
import { DThemeDarkChartCoordinateLinear } from "../theme/dark/d-theme-dark-chart-coordinate-linear";
import { DThemeDarkChartCoordinateLog } from "../theme/dark/d-theme-dark-chart-coordinate-log";
import { DThemeDarkChartLegend } from "../theme/dark/d-theme-dark-chart-legend";
import { DThemeDarkChartLegendItem } from "../theme/dark/d-theme-dark-chart-legend-item";
import { DThemeDarkChartOverview } from "../theme/dark/d-theme-dark-chart-overview";
import { DThemeDarkChartPlotArea } from "../theme/dark/d-theme-dark-chart-plot-area";

export const loadThemeDarkChart = () => {
	DThemeDark.set( "DChart", DThemeDarkChart );
	DThemeDark.set( "DChartAxisX", DThemeDarkChartAxisX );
	DThemeDark.set( "DChartAxisXDatetime", DThemeDarkChartAxisXDatetime );
	DThemeDark.set( "DChartAxisY", DThemeDarkChartAxisY );
	DThemeDark.set( "DChartCoordinateLinear", DThemeDarkChartCoordinateLinear );
	DThemeDark.set( "DChartCoordinateLog", DThemeDarkChartCoordinateLog );
	DThemeDark.set( "DChartLegend", DThemeDarkChartLegend );
	DThemeDark.set( "DChartLegendItem", DThemeDarkChartLegendItem );
	DThemeDark.set( "DChartOverview", DThemeDarkChartOverview );
	DThemeDark.set( "DChartPlotArea", DThemeDarkChartPlotArea );
};
