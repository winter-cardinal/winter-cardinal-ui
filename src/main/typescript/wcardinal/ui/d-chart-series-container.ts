/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesSelection } from "./d-chart-series-selection";
import { DChartSeriesStroke, DChartSeriesStrokeOptions } from "./d-chart-series-stroke";
import { EShapeLineHitResult } from "./shape/variant/e-shape-line-hit-result";

export interface DChartSeriesContainerOptions {
	list: DChartSeries[];
	stroke?: DChartSeriesStrokeOptions;
	selection?: DChartSeriesSelection | null;
}

export interface DChartSeriesContainer {
	domain: DChartRegion;
	range: DChartRegion;

	readonly plotArea: DChartPlotArea;
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

	hitTest( global: IPoint ): DChartSeries | null;
	calcHitX(
		global: IPoint,
		thresholdScale: number, thresholdMinimum: number,
		result: EShapeLineHitResult
	): DChartSeries | null;
	select( global: IPoint ): void;
}
