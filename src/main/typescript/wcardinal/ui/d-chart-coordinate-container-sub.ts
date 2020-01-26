/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";

export interface DChartCoordinateContainerSub {
	readonly container: DChartCoordinateContainer;

	add( coordinate: DChartCoordinate, index?: number ): this;
	get( index: number ): DChartCoordinate | null;
	indexOf( coordinate: DChartCoordinate ): number;
	remove( coordinate: DChartCoordinate ): DChartCoordinate | null;
	remove( index: number ): DChartCoordinate | null;
	clear(): this;
	destroy(): this;
	size(): number;

	fit( from?: number, to?: number ): this;
}
