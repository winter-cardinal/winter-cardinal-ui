/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxis } from "./d-chart-axis";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartPlotArea } from "./d-chart-plot-area";
import { EShapeContainer } from "./shape/e-shape-container";

export interface DChartAxisContainerOptions {
	list?: DChartAxis[];
}

export interface DChartAxisContainer {
	readonly container: EShapeContainer;
	readonly plotArea: DChartPlotArea;

	add( axis: DChartAxis ): void;
	get( position: DChartAxisPosition, index: number ): DChartAxis | null;
	indexOf( axis: DChartAxis ): number;
	clear( position: DChartAxisPosition ): this;
	size( position: DChartAxisPosition ): number;
	update(): void;
	destroy(): void;
}
