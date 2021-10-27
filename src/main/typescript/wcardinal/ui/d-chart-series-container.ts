/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartSelection } from "./d-chart-selection";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesFillOptions } from "./d-chart-series-fill";
import {
	DChartSeriesFillComputed,
	DChartSeriesFillComputedOptions
} from "./d-chart-series-fill-computed";
import { DChartSeriesPaddingOptions } from "./d-chart-series-padding";
import {
	DChartSeriesPaddingComputed,
	DChartSeriesPaddingComputedOptions
} from "./d-chart-series-padding-computed";
import { DChartSeriesPointOptions } from "./d-chart-series-point";
import {
	DChartSeriesPointComputed,
	DChartSeriesPointComputedOptions
} from "./d-chart-series-point-computed";
import { DChartSeriesStrokeOptions } from "./d-chart-series-stroke";
import {
	DChartSeriesStrokeComputed,
	DChartSeriesStrokeComputedOptions
} from "./d-chart-series-stroke-computed";

export interface DChartSeriesContainerOptions<CHART extends DBase = DBase> {
	list: DChartSeries<CHART>[];
	selection?: DChartSelection<CHART>;

	fill?: DChartSeriesFillOptions;
	stroke?: DChartSeriesStrokeOptions;
	size?: DChartSeriesPointOptions;
	offset?: DChartSeriesPointOptions;
	padding?: DChartSeriesPaddingOptions;
}

export interface DChartSeriesContainer<CHART extends DBase = DBase> {
	domain: DChartRegion;
	range: DChartRegion;

	readonly plotArea: DChartPlotArea<CHART>;
	readonly selection: DChartSelection<CHART> | null;

	newFill(
		index: number,
		options: DChartSeriesFillComputedOptions | undefined
	): DChartSeriesFillComputed;
	newStroke(
		index: number,
		options: DChartSeriesStrokeComputedOptions | undefined
	): DChartSeriesStrokeComputed;
	newSize(
		index: number,
		options: DChartSeriesPointComputedOptions | undefined,
		x: number,
		y: number
	): DChartSeriesPointComputed;
	newOffset(
		index: number,
		options: DChartSeriesPointComputedOptions | undefined,
		x: number,
		y: number
	): DChartSeriesPointComputed;
	newPadding(
		index: number,
		options: DChartSeriesPaddingComputedOptions | undefined
	): DChartSeriesPaddingComputed;

	update(): void;
	add(series: DChartSeries<CHART>): void;
	get(index: number): DChartSeries<CHART> | null;
	clear(): this;
	size(): number;
	destroy(): void;
	indexOf(series: DChartSeries<CHART>): number;

	getDomain(coordinate: DChartCoordinate<CHART>, result: DChartRegion): DChartRegion;
	getRange(coordinate: DChartCoordinate<CHART>, result: DChartRegion): DChartRegion;

	hitTest(x: number, y: number): DChartSeries<CHART> | null;
	calcHitPoint(x: number, y: number, result: DChartSeriesHitResult): DChartSeries<CHART> | null;
}
