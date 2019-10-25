/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesStroke, DChartSeriesStrokeOptions } from "./d-chart-series-stroke";

export interface DChartSeriesContainerOptions {
	list: DChartSeries[];
	stroke?: DChartSeriesStrokeOptions;
}

export interface DChartSeriesContainer {
	domain: DChartRegion;
	range: DChartRegion;

	readonly plotArea: DChartPlotArea;
	readonly stroke: DChartSeriesStroke;

	update(): void;
	add( series: DChartSeries ): void;
	get( index: number ): DChartSeries | null;
	remove( series: DChartSeries ): DChartSeries | null;
	remove( index: number ): DChartSeries | null;
	clear(): this;
	size(): number;
	destroy(): void;
	indexOf( series: DChartSeries ): number;
}
