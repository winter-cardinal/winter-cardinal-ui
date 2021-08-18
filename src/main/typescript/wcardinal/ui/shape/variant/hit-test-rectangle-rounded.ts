/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeSide } from "../e-shape-stroke-side";

const hitTestRectangleRounded_ = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	r: number,
	corner: EShapeCorner
): boolean => {
	const bx0 = -ax + r;
	if (x <= bx0) {
		const by0 = -ay + r;
		if (y <= by0 && corner & EShapeCorner.TOP_LEFT) {
			// Top-left corner
			const dx = x - bx0;
			const dy = y - by0;
			return dx * dx + dy * dy <= r * r;
		} else {
			const by1 = +ay - r;
			if (by1 <= y && corner & EShapeCorner.BOTTOM_LEFT) {
				// Bottom-left corner
				const dx = x - bx0;
				const dy = y - by1;
				return dx * dx + dy * dy <= r * r;
			} else {
				// Middle-left box
				return -ax <= x;
			}
		}
	} else {
		const bx1 = +ax - r;
		if (bx1 <= x) {
			const by0 = -ay + r;
			if (y <= by0 && corner & EShapeCorner.TOP_RIGHT) {
				// Top-right corner
				const dx = x - bx1;
				const dy = y - by0;
				return dx * dx + dy * dy <= r * r;
			} else {
				const by1 = +ay - r;
				if (by1 <= y && corner & EShapeCorner.BOTTOM_RIGHT) {
					// Bottom-right corner
					const dx = x - bx1;
					const dy = y - by1;
					return dx * dx + dy * dy <= r * r;
				} else {
					// Middle-right box
					return x <= +ax;
				}
			}
		} else {
			return -ay <= y && y <= +ay;
		}
	}
};

export const hitTestRectangleRounded = (
	shape: EShape,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	const fill = shape.fill;
	if (fill.enable || 0 < sw) {
		const r = shape.radius * Math.min(ax, ay);
		const corner = shape.corner;
		if (hitTestRectangleRounded_(x, y, ax, ay, r, corner)) {
			if (fill.enable) {
				return true;
			} else {
				const s = sw * ss;
				const wx = Math.max(0.0, ax - s);
				const wy = Math.max(0.0, ay - s);
				const wr = Math.max(0.0, r - s);
				if (!hitTestRectangleRounded_(x, y, wx, wy, wr, corner)) {
					const strokeSide = shape.stroke.side;
					if (strokeSide === EShapeStrokeSide.ALL) {
						return true;
					} else {
						if (x <= -wx + wr) {
							const hasLeftSide = !!(strokeSide & EShapeStrokeSide.LEFT);
							if (y <= -wy + wr) {
								const hasTopSide = !!(strokeSide & EShapeStrokeSide.TOP);
								if (hasTopSide && hasLeftSide) {
									return true;
								} else if (hasTopSide) {
									return -wx <= y;
								} else if (hasLeftSide) {
									return x <= -wx;
								} else {
									return false;
								}
							} else if (+wy - wr <= y) {
								const hasBottomSide = !!(strokeSide & EShapeStrokeSide.BOTTOM);
								if (hasBottomSide && hasLeftSide) {
									return true;
								} else if (hasBottomSide) {
									return +wx <= y;
								} else if (hasLeftSide) {
									return x <= -wx;
								} else {
									return false;
								}
							} else {
								return hasLeftSide;
							}
						} else if (+wx - wr <= x) {
							const hasRightSide = !!(strokeSide & EShapeStrokeSide.RIGHT);
							if (y <= -wy + wr) {
								const hasTopSide = !!(strokeSide & EShapeStrokeSide.TOP);
								if (hasTopSide && hasRightSide) {
									return true;
								} else if (hasTopSide) {
									return -wx <= y;
								} else if (hasRightSide) {
									return +wx <= x;
								} else {
									return false;
								}
							} else if (+wy - wr <= y) {
								const hasBottomSide = !!(strokeSide & EShapeStrokeSide.BOTTOM);
								if (hasBottomSide && hasRightSide) {
									return true;
								} else if (hasBottomSide) {
									return +wx <= y;
								} else if (hasRightSide) {
									return +wx <= x;
								} else {
									return false;
								}
							} else {
								return hasRightSide;
							}
						} else {
							if (y <= -wy + wr) {
								return !!(strokeSide & EShapeStrokeSide.TOP);
							} else if (+wy - wr <= y) {
								return !!(strokeSide & EShapeStrokeSide.BOTTOM);
							} else {
								return false;
							}
						}
					}
				}
			}
		}
	}
	return false;
};
