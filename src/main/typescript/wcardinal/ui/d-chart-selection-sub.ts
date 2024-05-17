/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, utils } from "pixi.js";
import { DBase, DBaseOnOptions } from "./d-base";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionContainerOptions } from "./d-chart-selection-container";
import { DChartSelectionShapeOptions } from "./d-chart-selection-shape";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export interface DChartSelectionSubOptions<CHART extends DBase = DBase, EMITTER = any> {
	enable?: boolean;
	gridline?: DChartSelectionContainerOptions<CHART>;
	marker?: DChartSelectionShapeOptions<CHART>;
	label?: DChartSelectionContainerOptions<CHART>;
	state?: string;
	on?: DBaseOnOptions<EMITTER>;
	point?: DChartSelectionPoint;
}

export interface DThemeChartSelectionSub {
	isEnabled(): boolean;
}

export interface DChartSelectionSub<CHART extends DBase = DBase> extends utils.EventEmitter {
	readonly visible: boolean;
	readonly series: DChartSeries<CHART> | null;
	readonly position: Point;

	bind(container: DChartSeriesContainer<CHART>): void;
	unbind(): void;

	/**
	 * Sets a series to null and set a position to the given global position.
	 *
	 * @param x a global X position
	 * @param y a global Y position
	 */
	set(x: number, y: number): void;

	/**
	 * Sets a series and a position.
	 *
	 * @param series a series to be set
	 * @param result a hit result
	 */
	set(series: DChartSeries<CHART>, result: DChartSeriesHitResult): void;

	/**
	 * Clear a series and a position.
	 */
	unset(): void;
	update(): boolean;
}
