/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeFillDirection } from "../e-shape-fill-direction";

export const hitTestCircleLegacy = (
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
		return hitTestCircleFilled(x, y, ax, ay);
	}
	return hitTestCircleStroke(x, y, ax, ay, sw, ss);
};

const hitTestCircleFilled = (x: number, y: number, ax: number, ay: number): boolean => {
	const x2 = x * x;
	const y2 = y * y;
	const ax2 = ax * ax;
	const ay2 = ay * ay;
	return x2 * ay2 + y2 * ax2 <= ax2 * ay2;
};

const hitTestCircleStroke = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	if (0 < sw) {
		const s = sw * ss;
		const x2 = x * x;
		const y2 = y * y;
		const wx = Math.max(0.0, ax - s);
		const wy = Math.max(0.0, ay - s);
		const wx2 = wx * wx;
		const wy2 = wy * wy;
		if (wx2 * wy2 <= x2 * wy2 + y2 * wx2) {
			return hitTestCircleFilled(x, y, ax, ay);
		}
	}
	return false;
};

export const hitTestCircle = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	if (!hitTestCircleFilled(x, y, ax, ay)) {
		return false;
	}

	const fill = shape.fill;
	if (fill.enable) {
		const percent = Math.max(0, Math.min(1, fill.percent));
		if (1 <= percent) {
			return true;
		}

		switch (fill.direction) {
			case EShapeFillDirection.TOP:
				if (y + ay <= percent * (2 * ay)) {
					return true;
				}
				break;
			case EShapeFillDirection.RIGHT:
				if ((1 - percent) * (2 * ax) <= x + ax) {
					return true;
				}
				break;
			case EShapeFillDirection.BOTTOM:
				if ((1 - percent) * (2 * ay) <= y + ay) {
					return true;
				}
				break;
			case EShapeFillDirection.LEFT:
				if (x + ax <= percent * (2 * ax)) {
					return true;
				}
				break;
		}
	}

	return hitTestCircleStroke(x, y, ax, ay, sw, ss);
};
