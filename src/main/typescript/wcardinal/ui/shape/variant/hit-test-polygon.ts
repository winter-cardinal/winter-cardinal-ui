/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeFillDirection } from "../e-shape-fill-direction";
import { EShapePolygon } from "./e-shape-polygon";

/**
 * Returns the minimum squared distance between the given point (x, y) and the polygon edges.
 *
 * @param shape a polygon
 * @param x a X-coordinate position
 * @param y a Y-coordinate position
 * @param ax a polygon width
 * @param ay a polygon height
 * @returns the minimum squared distance between the given point (x, y) and the polygon edges
 */
export const calcPolygonSquaredDistance = (
	values: number[],
	valuesLength: number,
	x: number,
	y: number
): number => {
	if (valuesLength < 4) {
		return Infinity;
	}
	let result = Infinity;
	let pvx = values[valuesLength - 2];
	let pvy = values[valuesLength - 1];
	for (let i = 0; i < valuesLength; i += 2) {
		const vx = values[i];
		const vy = values[i + 1];
		const dvx = vx - pvx;
		const dvy = vy - pvy;
		const dv = dvx * dvx + dvy * dvy;
		let t = 0;
		if (0 < dv) {
			t = ((x - pvx) * dvx + (y - pvy) * dvy) / dv;
			if (t < 0) {
				t = 0;
			} else if (1 < t) {
				t = 1;
			}
		}
		const dx = x - (pvx + t * dvx);
		const dy = y - (pvy + t * dvy);
		const d = dx * dx + dy * dy;
		if (d < result) {
			result = d;
		}
		pvx = vx;
		pvy = vy;
	}
	return result;
};

export const hitTestPolygon = (
	shape: EShapePolygon,
	x: number,
	y: number,
	ax: number,
	ay: number,
	sw: number,
	ss: number
): boolean => {
	const fill = shape.fill;
	const filled = fill.enable;
	if (!filled && sw <= 0) {
		return false;
	}
	const values = shape.points.values;
	const valuesLength = values.length;
	if (6 <= valuesLength) {
		let count = 0;
		let ppvy = values[valuesLength - 3];
		let pvx = values[valuesLength - 2];
		let pvy = values[valuesLength - 1];
		for (let i = 0; i < valuesLength; i += 2) {
			const vx = values[i];
			const vy = values[i + 1];
			if ((pvy <= y && y < vy) || (y <= pvy && vy < y)) {
				const dy = vy - pvy;
				let t = 0;
				if (0 < Math.abs(dy)) {
					t = (y - pvy) / dy;
				}
				const cx = pvx + t * (vx - pvx);
				if (x <= cx) {
					if (t <= 0) {
						// Since we could be just grazing vertices,
						// we need to check if the second-previous vertex is on the opposite side.
						if ((ppvy <= y && y < vy) || (y <= ppvy && vy < y)) {
							count += 1;
						}
					} else {
						count += 1;
					}
				}
			}
			ppvy = pvy;
			pvx = vx;
			pvy = vy;
		}
		if (count % 2 === 1) {
			if (filled) {
				const percent = fill.percent;
				if (1 <= percent) {
					return true;
				}
				const boundary = shape.triangulated.boundary;
				switch (fill.direction) {
					case EShapeFillDirection.TOP:
						if (y - boundary[1] <= percent * (boundary[3] - boundary[1])) {
							return true;
						}
						break;
					case EShapeFillDirection.RIGHT:
						if ((1 - percent) * (boundary[2] - boundary[0]) <= x - boundary[0]) {
							return true;
						}
						break;
					case EShapeFillDirection.BOTTOM:
						if ((1 - percent) * (boundary[3] - boundary[1]) <= y - boundary[1]) {
							return true;
						}
						break;
					case EShapeFillDirection.LEFT:
						if (x - boundary[0] <= percent * (boundary[2] - boundary[0])) {
							return true;
						}
						break;
				}
			}
			const sd = calcPolygonSquaredDistance(values, valuesLength, x, y);
			const s = sw * ss;
			return sd <= s * s;
		}
	}
	return false;
};
