/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

export const hitTestCircle = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	const fill = shape.fill;
	if (fill.enable) {
		const x2 = x * x;
		const y2 = y * y;
		const ax2 = ax * ax;
		const ay2 = ay * ay;
		if (x2 * ay2 + y2 * ax2 <= ax2 * ay2) {
			return true;
		}
	} else {
		if (0 < sw) {
			const s = sw * ss;
			const x2 = x * x;
			const y2 = y * y;
			const wx = Math.max(0.0, ax - s);
			const wy = Math.max(0.0, ay - s);
			const wx2 = wx * wx;
			const wy2 = wy * wy;
			if (wx2 * wy2 <= x2 * wy2 + y2 * wx2) {
				const ax2 = ax * ax;
				const ay2 = ay * ay;
				if (x2 * ay2 + y2 * ax2 <= ax2 * ay2) {
					return true;
				}
			}
		}
	}
	return false;
};
