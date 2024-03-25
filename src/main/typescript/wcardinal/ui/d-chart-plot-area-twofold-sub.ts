/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartPlotArea, DChartPlotAreaLike } from "./d-chart-plot-area";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import {
	DChartCoordinateContainer,
	DChartCoordinateContainerOptions
} from "./d-chart-coordinate-container";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";

export interface DChartPlotAreaTwofoldSubOptions<CHART extends DBase = DBase> {
	series?: DChartSeriesContainerOptions<CHART>;
	coordinate?: DChartCoordinateContainerOptions<CHART>;
	axis?: DChartAxisContainerOptions<CHART>;
}

export interface DChartPlotAreaTwofoldSub<CHART extends DBase = DBase>
	extends DChartPlotAreaLike<CHART> {
	readonly plotArea: DChartPlotArea<CHART>;
	readonly chart: CHART;
	readonly container: DChartPlotAreaContainer;
	readonly series: DChartSeriesContainerImpl<CHART>;
	readonly coordinate: DChartCoordinateContainer<CHART>;
	readonly axis: DChartAxisContainer<CHART>;

	getContainerBounds(): PIXI.Rectangle;
	destroy(): void;
}
