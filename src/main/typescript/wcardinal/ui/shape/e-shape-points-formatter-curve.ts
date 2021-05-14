/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilCurve } from "../util/util-curve";
import { EShapeDefaults } from "./e-shape-defaults";
import { EShapePointsFormattedWithoutBoundary } from "./e-shape-points-formatted";
import { EShapePointsFormatter } from "./e-shape-points-formatter";
import { EShapePointsStyle } from "./e-shape-points-style";

export const eShapePointsFormatterCurve: EShapePointsFormatter = (
	length: number,
	values: number[],
	segments: number[],
	style: EShapePointsStyle,
	result: EShapePointsFormattedWithoutBoundary
): EShapePointsFormattedWithoutBoundary => {
	UtilCurve.interpolate(
		length,
		values,
		segments,
		UtilCurve.toHybrid,
		!!(style & EShapePointsStyle.CLOSED),
		EShapeDefaults.CURVE_SEGMENT_COUNT,
		true,
		result
	);
	result.length = result.values.length >> 1;
	result.style = style;
	return result;
};
