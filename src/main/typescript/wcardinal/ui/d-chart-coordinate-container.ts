/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartPlotArea } from "./d-chart-plot-area";

export interface DChartCoordinateContainerOptions {
	x?: DChartCoordinate | DChartCoordinate[];
	y?: DChartCoordinate | DChartCoordinate[];
}

export interface DChartCoordinateContainer {
	x: DChartCoordinateContainerSub;
	y: DChartCoordinateContainerSub;
	plotArea: DChartPlotArea;

	fit( domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number ): this;
	mark( domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number ): this;
	blend( ratio: number ): this;
}
