/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeStyle } from "../e-shape-stroke-style";

export const toDash = (style: EShapeStrokeStyle): number => {
	if (style & EShapeStrokeStyle.DOTTED_MASK) {
		if (style & EShapeStrokeStyle.DOTTED) {
			return 1;
		} else if (style & EShapeStrokeStyle.DOTTED_DENSELY) {
			return 2;
		} else {
			return 3;
		}
	} else if (style & EShapeStrokeStyle.DASHED_MASK) {
		if (style & EShapeStrokeStyle.DASHED) {
			return 4;
		} else if (style & EShapeStrokeStyle.DASHED_DENSELY) {
			return 5;
		} else {
			return 6;
		}
	} else {
		return 0;
	}
};
