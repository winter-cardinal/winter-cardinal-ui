/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DChartSelectionShape, DChartSelectionShapeOptions } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export interface DChartSelectionGridlineContainerOptions {
	x?: DChartSelectionShapeOptions;
	y?: DChartSelectionShapeOptions;
}

export interface DChartSelectionGridlineContainer {
	readonly x: DChartSelectionShape;
	readonly y: DChartSelectionShape;

	bind(container: DChartSeriesContainer): void;
	unbind(): void;
	set(container: DChartSeriesContainer, mappedPosition: IPoint, series: DChartSeries): void;
	unset(): void;
	update(container: DChartSeriesContainer, mappedPosition: IPoint): void;
}
