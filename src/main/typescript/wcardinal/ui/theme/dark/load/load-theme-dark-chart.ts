/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkChart } from "../d-theme-dark-chart";
import { DThemeDarkChartAxisX } from "../d-theme-dark-chart-axis-x";
import { DThemeDarkChartAxisXDatetime } from "../d-theme-dark-chart-axis-x-datetime";
import { DThemeDarkChartAxisY } from "../d-theme-dark-chart-axis-y";
import { DThemeDarkChartCoordinate } from "../d-theme-dark-chart-coordinate";
import { DThemeDarkChartCoordinateTick } from "../d-theme-dark-chart-coordinate-tick";
import { DThemeDarkChartCoordinateTransform } from "../d-theme-dark-chart-coordinate-transform";
import { DThemeDarkChartLegend } from "../d-theme-dark-chart-legend";
import { DThemeDarkChartLegendItem } from "../d-theme-dark-chart-legend-item";
import { DThemeDarkChartOverview } from "../d-theme-dark-chart-overview";
import { DThemeDarkChartPlotArea } from "../d-theme-dark-chart-plot-area";
import { DThemeDarkChartSelectionGridlineX } from "../d-theme-dark-chart-selection-gridline-x";
import { DThemeDarkChartSelectionGridlineY } from "../d-theme-dark-chart-selection-gridline-y";
import { DThemeDarkChartSelectionMarker } from "../d-theme-dark-chart-selection-marker";

export const loadThemeDarkChart = (): void => {
	DThemeDark.set("DChart", DThemeDarkChart);
	DThemeDark.set("DChartAxisX", DThemeDarkChartAxisX);
	DThemeDark.set("DChartAxisXDatetime", DThemeDarkChartAxisXDatetime);
	DThemeDark.set("DChartAxisY", DThemeDarkChartAxisY);
	DThemeDark.set("DChartCoordinate", DThemeDarkChartCoordinate);
	DThemeDark.set("DChartCoordinateTick", DThemeDarkChartCoordinateTick);
	DThemeDark.set("DChartCoordinateTransform", DThemeDarkChartCoordinateTransform);
	DThemeDark.set("DChartLegend", DThemeDarkChartLegend);
	DThemeDark.set("DChartLegendItem", DThemeDarkChartLegendItem);
	DThemeDark.set("DChartOverview", DThemeDarkChartOverview);
	DThemeDark.set("DChartPlotArea", DThemeDarkChartPlotArea);
	DThemeDark.set("DChartSelectionGridlineX", DThemeDarkChartSelectionGridlineX);
	DThemeDark.set("DChartSelectionGridlineY", DThemeDarkChartSelectionGridlineY);
	DThemeDark.set("DChartSelectionMarker", DThemeDarkChartSelectionMarker);
};
