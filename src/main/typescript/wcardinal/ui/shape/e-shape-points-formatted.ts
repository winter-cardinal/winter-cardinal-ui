/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "./e-shape-boundary";
import { EShapePointsStyle } from "./e-shape-points-style";

export type EShapePointsFormatted =
	| EShapePointsFormattedWithBoundary
	| EShapePointsFormattedWithoutBoundary;

export interface EShapePointsFormattedWithoutBoundary {
	length: number;
	/** Peak length */
	plength: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;
}

export interface EShapePointsFormattedWithBoundary extends EShapePointsFormattedWithoutBoundary {
	boundary: EShapeBoundary;
}

export const toPointsBoundary = (values: number[], result: EShapeBoundary): EShapeBoundary => {
	const valuesLength = values.length;
	if (2 <= valuesLength) {
		let xmin = values[0];
		let ymin = values[1];
		let xmax = xmin;
		let ymax = ymin;
		for (let i = 2, imax = values.length; i < imax; i += 2) {
			const x = values[i];
			const y = values[i + 1];
			xmin = Math.min(xmin, x);
			ymin = Math.min(ymin, y);
			xmax = Math.max(xmax, x);
			ymax = Math.max(ymax, y);
		}
		result[0] = xmin;
		result[1] = ymin;
		result[2] = xmax;
		result[3] = ymax;
	} else {
		result[0] = 0;
		result[1] = 0;
		result[2] = 0;
		result[3] = 0;
	}
	return result;
};
