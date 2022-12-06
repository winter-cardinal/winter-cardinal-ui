/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, utils } from "pixi.js";
import { DBase, DBaseOnOptions } from "./d-base";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionGridlineContainerOptions } from "./d-chart-selection-gridline-container";
import { DChartSelectionShapeOptions } from "./d-chart-selection-shape";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export interface DChartSelectionSubOptions<CHART extends DBase = DBase, EMITTER = any> {
	enable?: boolean;
	gridline?: DChartSelectionGridlineContainerOptions<CHART>;
	marker?: DChartSelectionShapeOptions<CHART>;
	state?: string;
	on?: DBaseOnOptions<EMITTER>;
	point?: DChartSelectionPoint;
}

export interface DThemeChartSelectionSub {
	isEnabled(): boolean;
}

export interface DChartSelectionSub<CHART extends DBase = DBase> extends utils.EventEmitter {
	readonly series: DChartSeries<CHART> | null;
	readonly position: Point;

	bind(container: DChartSeriesContainer<CHART>): void;
	unbind(): void;
	set(
		series: DChartSeries<CHART>,
		result: DChartSeriesHitResult | DChartSelectionSub<CHART>
	): void;
	unset(): void;
	update(): boolean;
}
