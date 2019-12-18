export interface DThemeChartCoordinateTransform {
	/**
	 * Returns true if the specified value is too close to zero.
	 *
	 * @param value a value to be checked
	 */
	isZero( value: number ): boolean;
}

export interface DChartCoordinateTransform {
	/**
	 * Monotonic increasing ID for change detection.
	 */
	readonly id: number;

	/**
	 * Translation amount
	 */
	translate: number;

	/**
	 * Scale
	 */
	scale: number;

	set( translate?: number, scale?: number ): void;

	/**
	 * Transforms the given untransformed value to a transformed value.
	 *
	 * @param value an untransformed value
	 */
	map( value: number ): number;

	/**
	 * Transforms the given untransformed values to transformed values.
	 * Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
	 * Here, i is a non-negative integer.
	 *
	 * @param values untransformed values to be transformed
	 * @param ifrom an index on raw values at which to begin a transformation
	 * @param iend an index on raw values before which to end a transformation
	 * @param stride a stride of indices
	 * @param offset an offset of indices
	 */
	mapAll( values: number[], ifrom: number, iend: number, stride: number, offset: number ): void;

	/**
	 * Transforms the given transformed value to an untransformed value.
	 *
	 * @param value a transformed value
	 */
	unmap( value: number ): number;

	/**
	 * Transformed the given transformed values to untransformed values.
	 * Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
	 * Here, i is a non-negative integer.
	 *
	 * @param values transformed values to be transformed.
	 * @param ifrom an index on raw values at which to begin a transformation
	 * @param iend an index on raw values before which to end a transformation
	 * @param stride a stride of indices
	 * @param offset an offset of indices
	 */
	unmapAll( values: number[], ifrom: number, iend: number, stride: number, offset: number ): void;
}
