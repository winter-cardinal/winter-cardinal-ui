/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeFanStrokeSide } from "./e-shape-fan-stroke-side";

/**
 * Converts a stroke side to a fan stroke mode.
 * The top bit stands for the arc and the bottom bit stands for the two straight sides.
 */
export const toFanStrokeSide = (side: EShapeStrokeSide): EShapeFanStrokeSide => {
	const top = (side & EShapeStrokeSide.TOP) !== 0;
	const bottom = (side & EShapeStrokeSide.BOTTOM) !== 0;
	if (top) {
		if (bottom) {
			return EShapeFanStrokeSide.ALL;
		} else {
			return EShapeFanStrokeSide.TOP;
		}
	} else {
		if (bottom) {
			return EShapeFanStrokeSide.BOTTOM;
		} else {
			return EShapeFanStrokeSide.NONE;
		}
	}
};
