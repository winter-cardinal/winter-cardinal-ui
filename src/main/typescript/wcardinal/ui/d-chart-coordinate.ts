/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateDirection } from "./d-chart-coordinate-direction";
import { DChartCoordinateTickOptions } from "./d-chart-coordinate-tick";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import {
	DChartCoordinateTransform,
	DChartCoordinateTransformOptions
} from "./d-chart-coordinate-transform";

export interface DThemeChartCoordinate {
	isZero(value: number): boolean;
}

export interface DChartCoordinateOptions {
	transform?: DChartCoordinateTransformOptions;
	tick?: DChartCoordinateTickOptions;
	from?: number;
	to?: number;
	theme?: DThemeChartCoordinate;
}

export interface DChartCoordinate<CHART extends DBase = DBase> {
	/**
	 * Monotonic increasing ID for change detection.
	 */
	readonly id: number;
	readonly transform: DChartCoordinateTransform<CHART>;

	from: number | undefined;
	to: number | undefined;

	bind(
		container: DChartCoordinateContainerSub<CHART>,
		direction: DChartCoordinateDirection
	): void;
	unbind(): void;

	/**
	 * Adjusts the transform so that mapped points of the given range fit into the plot area
	 * if the plot area container's localTransform is an identity matrix.
	 *
	 * @param from a lower end of the range
	 * @param to an upper end of the range
	 */
	fit(from?: number, to?: number): void;

	mark(from?: number, to?: number): void;

	blend(ratio: number): void;

	/**
	 * Transforms the given raw value to the untransformed value.
	 *
	 * @param value a raw value
	 */
	map(value: number): number;

	/**
	 * Transforms the given raw values to untransformed values.
	 * Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
	 * Here, i is a non-negative integer.
	 *
	 * @param values raw values to be transformed
	 * @param ifrom an index on raw values at which to begin a transformation
	 * @param iend an index on raw values before which to end a transformation
	 * @param stride a stride of indices
	 * @param offset an offset of indices
	 */
	mapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void;

	/**
	 * Transforms the given untransformed value to the raw value.
	 *
	 * @param value an untransformed value
	 */
	unmap(value: number): number;

	/**
	 * Transforms the given untransformed values to raw values.
	 * Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
	 * Here, i is a non-negative integer.
	 *
	 * @param values untrasformed values to be transformed
	 * @param ifrom an index on raw values at which to begin a transformation
	 * @param iend an index on raw values at which to begin a transformation
	 * @param stride a stride of indices
	 * @param offset an offset of indices
	 */
	unmapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void;

	/**
	 * Returns major / minor tick positions.
	 *
	 * @param domainMin minimum domain
	 * @param domainMax maximum domain
	 * @param majorCount Expected major tick count
	 * @param minorCountPerMajor Expected minor tick count per major ticks
	 * @param minorCount Expected total minor tick count
	 * @param majorResult `majorResult.length` must be larger than `majorCount * 3`.
	 * @param minorResult `minorResult.length` must be larger than `minorCount * 3`.
	 */
	ticks(
		domainMin: number,
		domainMax: number,
		majorCount: number,
		majorCapacity: number,
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		minorCountPerMajor: number,
		minorCount: number,
		minorStep: number | DChartCoordinateTickMinorStepFunction | undefined,
		majorResult: number[],
		minorResult: number[]
	): void;
}
