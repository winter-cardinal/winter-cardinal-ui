/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DChart } from "./d-chart";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartCoordinateContainer, DChartCoordinateContainerOptions } from "./d-chart-coordinate-container";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { EShapeContainer } from "./shape/e-shape-container";

export enum DChartPlotAreaFitTarget {
	NONE	= 0,
	DOMAIN	= 1,
	RANGE	= 2,
	BOTH	= DOMAIN | RANGE
}

export interface DChartPlotAreaOptions {
	width?: number;
	height?: number;
	coordinate?: DChartCoordinateContainerOptions;
	series?: DChartSeriesContainerOptions;
	axis?: DChartAxisContainerOptions;
}

export interface DChartPlotArea {
	readonly chart: DChart;
	readonly series: DChartSeriesContainer;
	readonly coordinate: DChartCoordinateContainer;
	readonly container: EShapeContainer;
	readonly size: IPoint;
	readonly axis: DChartAxisContainer;

	destroy(): void;
}
