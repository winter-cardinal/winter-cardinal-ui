export interface EShapeBoundary extends Array<number> {
	/** Minimum X coordinate */
	[0]: number;
	/** Minimum Y coordinate */
	[1]: number;
	/** Maximum X coordinate */
	[2]: number;
	/** Maximum Y coordinate */
	[3]: number;
}
