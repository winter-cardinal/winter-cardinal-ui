/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultChart } from "../theme/default/d-theme-default-chart";
import { DThemeDefaultChartAxisX } from "../theme/default/d-theme-default-chart-axis-x";
import { DThemeDefaultChartAxisXDatetime } from "../theme/default/d-theme-default-chart-axis-x-datetime";
import { DThemeDefaultChartAxisY } from "../theme/default/d-theme-default-chart-axis-y";
import { DThemeDefaultChartCoordinateLinear } from "../theme/default/d-theme-default-chart-coordinate-linear";
import { DThemeWhiteChartCoordinateLog } from "../theme/white/d-theme-white-chart-coordinate-log";
import { DThemeWhiteChartLegend } from "../theme/white/d-theme-white-chart-legend";
import { DThemeWhiteChartLegendItem } from "../theme/white/d-theme-white-chart-legend-item";
import { DThemeWhiteChartOverview } from "../theme/white/d-theme-white-chart-overview";
import { DThemeWhiteChartPlotArea } from "../theme/white/d-theme-white-chart-plot-area";

export const loadThemeDefaultChart = () => {
	DThemeDefault.set( "DChart", DThemeDefaultChart );
	DThemeDefault.set( "DChartAxisX", DThemeDefaultChartAxisX );
	DThemeDefault.set( "DChartAxisXDatetime", DThemeDefaultChartAxisXDatetime );
	DThemeDefault.set( "DChartAxisY", DThemeDefaultChartAxisY );
	DThemeDefault.set( "DChartCoordinateLinear", DThemeDefaultChartCoordinateLinear );
	DThemeWhite.set( "DChartCoordinateLog", DThemeWhiteChartCoordinateLog );
	DThemeWhite.set( "DChartLegend", DThemeWhiteChartLegend );
	DThemeWhite.set( "DChartLegendItem", DThemeWhiteChartLegendItem );
	DThemeWhite.set( "DChartOverview", DThemeWhiteChartOverview );
	DThemeWhite.set( "DChartPlotArea", DThemeWhiteChartPlotArea );
};
