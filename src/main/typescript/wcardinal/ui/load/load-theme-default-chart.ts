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
import { DThemeDefaultChartCoordinateLog } from "../theme/default/d-theme-default-chart-coordinate-log";
import { DThemeDefaultChartLegend } from "../theme/default/d-theme-default-chart-legend";
import { DThemeDefaultChartLegendItem } from "../theme/default/d-theme-default-chart-legend-item";
import { DThemeDefaultChartOverview } from "../theme/default/d-theme-default-chart-overview";
import { DThemeDefaultChartPlotArea } from "../theme/default/d-theme-default-chart-plot-area";

export const loadThemeDefaultChart = () => {
	DThemeDefault.set( "DChart", DThemeDefaultChart );
	DThemeDefault.set( "DChartAxisX", DThemeDefaultChartAxisX );
	DThemeDefault.set( "DChartAxisXDatetime", DThemeDefaultChartAxisXDatetime );
	DThemeDefault.set( "DChartAxisY", DThemeDefaultChartAxisY );
	DThemeDefault.set( "DChartCoordinateLinear", DThemeDefaultChartCoordinateLinear );
	DThemeDefault.set( "DChartCoordinateLog", DThemeDefaultChartCoordinateLog );
	DThemeDefault.set( "DChartLegend", DThemeDefaultChartLegend );
	DThemeDefault.set( "DChartLegendItem", DThemeDefaultChartLegendItem );
	DThemeDefault.set( "DChartOverview", DThemeDefaultChartOverview );
	DThemeDefault.set( "DChartPlotArea", DThemeDefaultChartPlotArea );
};
