/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionGridlineContainerOptions } from "./d-chart-selection-gridline-container";
import { DChartSelectionShapeOptions } from "./d-chart-selection-shape";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export interface DChartSelectionSubOptions<EMITTER = any> {
	enable?: boolean;
	gridline?: DChartSelectionGridlineContainerOptions;
	marker?: DChartSelectionShapeOptions;
	state?: DBaseState;
	on?: DBaseOnOptions<EMITTER>;
	point?: DChartSelectionPoint;
}

export interface DThemeChartSelectionSub {
	isEnabled(): boolean;
}

export interface DChartSelectionSub extends utils.EventEmitter {
	readonly series: DChartSeries | null;
	readonly position: Point;

	bind( container: DChartSeriesContainer ): void;
	unbind(): void;
	set( series: DChartSeries, result: DChartSeriesHitResult | DChartSelectionSub ): void;
	unset(): void;
	update(): void;
}
