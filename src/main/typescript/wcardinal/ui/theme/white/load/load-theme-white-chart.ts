/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteChart } from "../d-theme-white-chart";
import { DThemeWhiteChartAxisX } from "../d-theme-white-chart-axis-x";
import { DThemeWhiteChartAxisXDatetime } from "../d-theme-white-chart-axis-x-datetime";
import { DThemeWhiteChartAxisY } from "../d-theme-white-chart-axis-y";
import { DThemeWhiteChartCoordinateLinear } from "../d-theme-white-chart-coordinate-linear";
import { DThemeWhiteChartCoordinateLog } from "../d-theme-white-chart-coordinate-log";
import { DThemeWhiteChartLegend } from "../d-theme-white-chart-legend";
import { DThemeWhiteChartLegendItem } from "../d-theme-white-chart-legend-item";
import { DThemeWhiteChartOverview } from "../d-theme-white-chart-overview";
import { DThemeWhiteChartPlotArea } from "../d-theme-white-chart-plot-area";
import { DThemeWhiteChartSelectionGridlineX } from "../d-theme-white-chart-selection-gridline-x";
import { DThemeWhiteChartSelectionGridlineY } from "../d-theme-white-chart-selection-gridline-y";
import { DThemeWhiteChartSelectionMarker } from "../d-theme-white-chart-selection-marker";

export const loadThemeWhiteChart = (): void => {
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
	DThemeWhite.set( "DChartSelectionGridlineX", DThemeWhiteChartSelectionGridlineX );
	DThemeWhite.set( "DChartSelectionGridlineY", DThemeWhiteChartSelectionGridlineY );
	DThemeWhite.set( "DChartSelectionMarker", DThemeWhiteChartSelectionMarker );
};
