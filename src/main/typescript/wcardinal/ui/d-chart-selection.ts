/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";

export const DChartSelectionPoint = {
	PREVIOUS: 0,
	NEXT: 1,
	CLOSER: 2,
	INTERSECTION: 3
} as const;

export type DChartSelectionPoint = typeof DChartSelectionPoint[keyof typeof DChartSelectionPoint];

export type DChartSelectionStyle = (shape: EShape, series: DChartSeries) => void;

export interface DChartSelection extends utils.EventEmitter {
	bind(container: DChartSeriesContainer): void;
	unbind(): void;
	update(): void;
}
