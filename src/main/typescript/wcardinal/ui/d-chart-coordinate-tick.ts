/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";

export interface DThemeChartCoordinateTick {
	toStepScale(scale: number): number;
}

export interface DChartCoordinateTickOptions {
	theme?: DThemeChartCoordinateTick;
}

export interface DChartCoordinateTick<CHART extends DBase = DBase> {
	calculate(
		domainFrom: number,
		domainTo: number,
		majorCount: number,
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		minorCountPerMajor: number,
		minorCount: number,
		minorStep: number | DChartCoordinateTickMinorStepFunction | undefined,
		majorResult: Float64Array,
		minorResult: Float64Array,
		coordinate: DChartCoordinate<CHART>
	): void;
}
