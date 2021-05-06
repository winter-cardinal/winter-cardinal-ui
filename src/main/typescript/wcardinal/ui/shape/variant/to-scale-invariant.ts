/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeStyle } from "../e-shape-stroke-style";

export const toScaleInvariant = (style: EShapeStrokeStyle): number => {
	const nonExpandingWidth = style & EShapeStrokeStyle.NON_EXPANDING_WIDTH ? 1 : 0;
	const nonShrinkingWidth = style & EShapeStrokeStyle.NON_SHRINKING_WIDTH ? 2 : 0;
	const nonScalingDotAndDash = style & EShapeStrokeStyle.NON_SCALING_DOT_AND_DASH ? 4 : 0;
	if (style & (EShapeStrokeStyle.DOTTED_MASK || EShapeStrokeStyle.DASHED_MASK)) {
		return nonExpandingWidth | nonShrinkingWidth | nonScalingDotAndDash;
	} else {
		return nonExpandingWidth | nonShrinkingWidth;
	}
};
