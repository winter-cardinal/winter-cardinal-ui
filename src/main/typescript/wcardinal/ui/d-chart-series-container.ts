/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesFill, DChartSeriesFillOptions } from "./d-chart-series-fill";
import { DChartSeriesSelection } from "./d-chart-series-selection";
import { DChartSeriesStroke, DChartSeriesStrokeOptions } from "./d-chart-series-stroke";
import { EShapePointsToHitThreshold } from "./shape/e-shape-points";

export interface DChartSeriesContainerOptions {
	list: DChartSeries[];
	fill?: DChartSeriesFillOptions;
	stroke?: DChartSeriesStrokeOptions;
	selection?: DChartSeriesSelection | null;
}

export interface DChartSeriesContainer {
	domain: DChartRegion;
	range: DChartRegion;

	readonly plotArea: DChartPlotArea;
	readonly fill: DChartSeriesFill;
	readonly stroke: DChartSeriesStroke;
	readonly selection: DChartSeriesSelection | null;

	update(): void;
	add( series: DChartSeries ): void;
	get( index: number ): DChartSeries | null;
	remove( series: DChartSeries ): DChartSeries | null;
	remove( index: number ): DChartSeries | null;
	clear(): this;
	size(): number;
	destroy(): void;
	indexOf( series: DChartSeries ): number;

	getDomain( coordinate: DChartCoordinate, result: DChartRegion ): DChartRegion;
	getRange( coordinate: DChartCoordinate, result: DChartRegion ): DChartRegion;

	hitTest( global: IPoint ): DChartSeries | null;
	calcHitPoint(
		global: IPoint,
		threshold: EShapePointsToHitThreshold,
		result: DChartSeriesHitResult
	): DChartSeries | null;
}
