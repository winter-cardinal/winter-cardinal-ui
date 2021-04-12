/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateTransform } from "./d-chart-coordinate-transform";

export enum DChartCoordinateDirection {
	X,
	Y
}

export interface DChartCoordinate {
	/**
	 * Monotonic increasing ID for change detection.
	 */
	readonly id: number;
	readonly transform: DChartCoordinateTransform;

	bind(container: DChartCoordinateContainerSub, direction: DChartCoordinateDirection): void;
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
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void;
}
