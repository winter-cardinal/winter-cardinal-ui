/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
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

export interface DChartSeriesCoordinateContainer<CHART extends DBase = DBase> {
	x: DChartCoordinate<CHART> | null;
	y: DChartCoordinate<CHART> | null;
}
