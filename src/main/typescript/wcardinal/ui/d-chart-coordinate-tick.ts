/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";

export interface DThemeChartCoordinateTick {
	toStep(domainMin: number, domainMax: number, majorCount: number): number;
}

export interface DChartCoordinateTickOptions {
	theme?: DThemeChartCoordinateTick;
}

export interface DChartCoordinateTick<CHART extends DBase = DBase> {
	calculate(
		domainFrom: number,
		domainTo: number,
		majorCount: number,
		majorCapacity: number,
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		minorCountPerMajor: number,
		minorCount: number,
		minorStep: number | DChartCoordinateTickMinorStepFunction | undefined,
		majorResult: number[],
		minorResult: number[],
		coordinate: DChartCoordinate<CHART>
	): void;
}
