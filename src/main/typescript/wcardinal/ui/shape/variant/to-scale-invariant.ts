/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "../e-shape-points-style";

export const toScaleInvariant = (style: EShapePointsStyle): number => {
	const nonExpandingWidth = style & EShapePointsStyle.NON_EXPANDING_WIDTH ? 1 : 0;
	const nonShrinkingWidth = style & EShapePointsStyle.NON_SHRINKING_WIDTH ? 2 : 0;
	const nonScalingDotAndDash = style & EShapePointsStyle.NON_SCALING_DOT_AND_DASH ? 4 : 0;
	if (style & EShapePointsStyle.NON_SOLID_MASK) {
		return nonExpandingWidth | nonShrinkingWidth | nonScalingDotAndDash;
	} else {
		return nonExpandingWidth | nonShrinkingWidth;
	}
};
