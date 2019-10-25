/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";

export enum DChartCoordinateDirection {
	X,
	Y
}

export interface DChartCoordinate {
	readonly id: number;

	bind( container: DChartCoordinateContainerSub, direction: DChartCoordinateDirection ): void;
	unbind(): void;

	fit(): void;

	map( value: number ): number;
	unmap( value: number ): number;

	/**
	 *
	 * @param majorCount Expected major tick count
	 * @param minorCountPerMajor Expected minor tick count per major ticks
	 * @param minorCount Expected total minor tick count
	 * @param majorResult `majorResult.length` must be larger than `majorCount * 3`.
	 * @param minorResult `minorResult.length` must be larger than `minorCount * 3`.
	 */
	ticks(
		majorCount: number,
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void;
}
