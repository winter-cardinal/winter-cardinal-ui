/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeFillDirection } from "../e-shape-fill-direction";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { hitTestBBox } from "./hit-test-bbox";

export const hitTestRectangleLegacy = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	if (hitTestBBox(x, y, ax, ay)) {
		const fill = shape.fill;
		if (fill.enable) {
			return true;
		} else {
			return hitTestRectangleStroke(shape, x, y, ax, ay, sw, ss);
		}
	}
	return false;
};

const hitTestRectangleStroke = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	const strokeSide = shape.stroke.side;
	if (0 < sw && strokeSide !== EShapeStrokeSide.NONE) {
		const s = sw * ss;
		const wx = Math.max(0.0, ax - s);
		const wy = Math.max(0.0, ay - s);
		if (!hitTestBBox(x, y, wx, wy)) {
			if (strokeSide === EShapeStrokeSide.ALL) {
				return true;
			} else {
				if (x <= -wx) {
					if (y <= -wy) {
						return !!(strokeSide & EShapeStrokeSide.TOP_OR_LEFT);
					} else if (+wy <= y) {
						return !!(strokeSide & EShapeStrokeSide.BOTTOM_OR_LEFT);
					} else {
						return !!(strokeSide & EShapeStrokeSide.LEFT);
					}
				} else if (+wx <= x) {
					if (y <= -wy) {
						return !!(strokeSide & EShapeStrokeSide.TOP_OR_RIGHT);
					} else if (+wy <= y) {
						return !!(strokeSide & EShapeStrokeSide.BOTTOM_OR_RIGHT);
					} else {
						return !!(strokeSide & EShapeStrokeSide.RIGHT);
					}
				} else {
					if (y <= -wy) {
						return !!(strokeSide & EShapeStrokeSide.TOP);
					} else if (+wy <= y) {
						return !!(strokeSide & EShapeStrokeSide.BOTTOM);
					} else {
						return false;
					}
				}
			}
		}
	}
	return false;
};

export const hitTestRectangle = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	if (!hitTestBBox(x, y, ax, ay)) {
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

	return hitTestRectangleStroke(shape, x, y, ax, ay, sw, ss);
};
