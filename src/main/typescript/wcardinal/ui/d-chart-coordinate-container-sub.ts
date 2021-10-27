/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";

export interface DChartCoordinateContainerSub<CHART extends DBase = DBase> {
	readonly container: DChartCoordinateContainer<CHART>;

	add(coordinate: DChartCoordinate<CHART>, index?: number): this;
	get(index: number): DChartCoordinate<CHART> | null;
	indexOf(coordinate: DChartCoordinate<CHART>): number;
	remove(coordinate: DChartCoordinate<CHART>): DChartCoordinate<CHART> | null;
	remove(index: number): DChartCoordinate<CHART> | null;
	clear(): this;
	destroy(): this;
	size(): number;

	fit(from?: number, to?: number): this;
	mark(from?: number, to?: number): this;
	blend(ratio: number): this;
}
