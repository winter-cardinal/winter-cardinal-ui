/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionShape, DChartSelectionShapeOptions } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export interface DChartSelectionContainerOptions<CHART extends DBase = DBase> {
	x?: DChartSelectionShapeOptions<CHART>;
	y?: DChartSelectionShapeOptions<CHART>;
}

export interface DChartSelectionContainer<CHART extends DBase = DBase> {
	readonly x: DChartSelectionShape<CHART>;
	readonly y: DChartSelectionShape<CHART>;

	bind(container: DChartSeriesContainer<CHART>): void;
	unbind(): void;
	set(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART>
	): void;
	unset(): void;
	update(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART> | null
	): boolean;
}
