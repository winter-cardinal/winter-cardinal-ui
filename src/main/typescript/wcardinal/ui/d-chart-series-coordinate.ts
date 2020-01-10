/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";

export interface DChartSeriesCoordinateOptions {
	/**
	 * An index of a X axis.
	 */
	x?: number;

	/**
	 * An index of a Y axis.
	 */
	y?: number;
}

export interface DChartSeriesCoordinateContainer {
	x: DChartCoordinate | null;
	y: DChartCoordinate | null;
}
