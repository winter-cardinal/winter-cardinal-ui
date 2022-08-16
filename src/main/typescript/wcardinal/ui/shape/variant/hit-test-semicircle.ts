/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { hitTestCircle } from "./hit-test-circle";

export const hitTestSemicircle = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	if (y <= 0) {
		return hitTestCircle(shape, x, y, ax, ay, sw, ss);
	}
	return false;
};
