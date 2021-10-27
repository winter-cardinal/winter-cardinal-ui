/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartPlotArea } from "./d-chart-plot-area";

export interface DChartCoordinateContainerOptions<CHART extends DBase = DBase> {
	x?: DChartCoordinate<CHART> | DChartCoordinate<CHART>[];
	y?: DChartCoordinate<CHART> | DChartCoordinate<CHART>[];
}

export interface DChartCoordinateContainer<CHART extends DBase = DBase> {
	x: DChartCoordinateContainerSub<CHART>;
	y: DChartCoordinateContainerSub<CHART>;
	plotArea: DChartPlotArea<CHART>;

	fit(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this;
	mark(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this;
	blend(ratio: number): this;
}
