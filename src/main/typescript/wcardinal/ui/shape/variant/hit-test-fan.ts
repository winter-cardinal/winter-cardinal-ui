/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeFillDirection } from "../e-shape-fill-direction";
import type { EShapeFan } from "./e-shape-fan";
import { EShapeFanStrokeSide, toFanChi, toFanStrokeSide, toFanTheta } from "./to-fan";

/**
 * Tests whether the point is in the fan shrunk by `sa` at the arc and by `ss` at the straight sides.
 *
 * @param st - The sine of the half central angle
 * @param ct - The cosine of the half central angle
 */
const isInFan = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	st: number,
	ct: number,
	sa: number,
	ss: number
): boolean => {
	const wx = ax - sa;
	const wy = ay - sa;
	if (wx <= 0 || wy <= 0) {
		return false;
	}
	const ex = x * wy;
	const ey = y * wx;
	if (wx * wy * wx * wy < ex * ex + ey * ey) {
		return false;
	}
	const ay1 = st * y;
	return -ct * x + ay1 <= -ss && ct * x + ay1 <= -ss;
};

const hitTestFanFill = (
	shape: EShapeFan,
	x: number,
	y: number,
	bx: number,
	by: number
): boolean => {
	const fill = shape.fill;
	if (fill.enable) {
		const percent = Math.max(0, Math.min(1, fill.percent));
		if (1 <= percent) {
			return true;
		}

		// The fill is relative to the bounding box [-bx, +bx] x [-by, 0] of the fan.
		switch (fill.direction) {
			case EShapeFillDirection.TOP:
				return y + by <= percent * by;
			case EShapeFillDirection.RIGHT:
				return (1 - percent) * (2 * bx) <= x + bx;
			case EShapeFillDirection.BOTTOM:
				return (1 - percent) * by <= y + by;
			case EShapeFillDirection.LEFT:
				return x + bx <= percent * (2 * bx);
		}
	}
	return false;
};

export const hitTestFan = (
	shape: EShapeFan,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	const theta = toFanTheta(shape.angle);
	if (theta <= 0 || ax <= 0 || ay <= 0) {
		return false;
	}

	const chi = toFanChi(ax, ay, theta);
	const bx = ax * Math.sin(chi);
	const st = Math.sin(theta);
	const ct = Math.cos(theta);
	const fill = shape.fill;
	const mode = toFanStrokeSide(shape.stroke.side);
	const strokeWidth = mode !== EShapeFanStrokeSide.NONE ? sw : 0;
	if ((fill.enable || 0 < strokeWidth) && isInFan(x, y, ax, ay, st, ct, 0, 0)) {
		if (fill.enable && hitTestFanFill(shape, x, y, bx, ay)) {
			return true;
		}
		if (0 < strokeWidth) {
			const s = strokeWidth * ss;
			const arc = mode !== EShapeFanStrokeSide.BOTTOM ? s : 0;
			const sides = mode !== EShapeFanStrokeSide.TOP ? s : 0;
			if (!isInFan(x, y, ax, ay, st, ct, arc, sides)) {
				return true;
			}
		}
	}
	return false;
};
