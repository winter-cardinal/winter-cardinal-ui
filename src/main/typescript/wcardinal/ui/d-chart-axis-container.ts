/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartPlotArea } from "./d-chart-plot-area";
import { EShapeContainer } from "./shape/e-shape-container";

export interface DChartAxisContainerOptions<CHART extends DBase = DBase> {
	list?: DChartAxis<CHART>[];
}

export interface DChartAxisContainer<CHART extends DBase = DBase> {
	readonly container: EShapeContainer;
	readonly plotArea: DChartPlotArea<CHART>;

	add(axis: DChartAxis<CHART>): void;
	get(position: DChartAxisPosition, index: number): DChartAxis<CHART> | null;
	indexOf(axis: DChartAxis<CHART>): number;
	clear(position: DChartAxisPosition): this;
	size(position: DChartAxisPosition): number;
	update(): void;
	destroy(): void;
}
