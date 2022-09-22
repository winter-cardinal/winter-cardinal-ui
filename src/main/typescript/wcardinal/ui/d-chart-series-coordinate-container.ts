/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";

export interface DChartSeriesCoordinateContainerOptions {
	/**
	 * An index of a X axis.
	 */
	x?: number;

	/**
	 * An index of a Y axis.
	 */
	y?: number;
}

export interface DChartSeriesCoordinateContainer<CHART extends DBase = DBase> {
	get x(): DChartCoordinate<CHART> | null;
	set x(coordinate: number | DChartCoordinate<CHART> | null);

	get y(): DChartCoordinate<CHART> | null;
	set y(coordinate: number | DChartCoordinate<CHART> | null);
}
