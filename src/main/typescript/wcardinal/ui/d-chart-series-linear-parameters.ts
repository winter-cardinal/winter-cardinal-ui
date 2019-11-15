
export interface DChartSeriesLinearParametersOptions {
	/** A coefficient of the variable x. The default value is 1. */
	a?: number;

	/** A coefficient of the variable y. The default value is 1. */
	b?: number;

	/** X coordinate of the point the line passes through. The default value is 0. */
	x0: number;

	/** Y coordinate of the point the line passes through. The default value is 0. */
	y0: number;
}

export interface DChartSeriesLinearParameters {
	/** A coefficient of the variable x */
	a: number;

	/** A coefficient of the variable y */
	b: number;

	/** X coordinate of the point the line passes through */
	x0: number;

	/** Y coordinate of the point the line passes through */
	y0: number;
}
