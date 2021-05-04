/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilCurve } from "../util/util-curve";
import { EShapePointsFormatterResult } from "./e-shape-points-formatter-result";
import { EShapePointsFormatterSource } from "./e-shape-points-formatter-source";
import { EShapePointsStyle } from "./e-shape-points-style";

export const eShapePointsFormatterCurve = (
	source: EShapePointsFormatterSource,
	result: EShapePointsFormatterResult
): EShapePointsFormatterResult => {
	const style = source.style;
	UtilCurve.interpolate(
		source.length,
		source.values,
		source.segments,
		UtilCurve.toHybrid,
		!!(style & EShapePointsStyle.CLOSED),
		12,
		true,
		result
	);
	result.length = result.values.length >> 1;
	return result;
};
