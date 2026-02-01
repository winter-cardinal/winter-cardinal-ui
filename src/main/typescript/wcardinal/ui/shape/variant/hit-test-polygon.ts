/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

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
	shape: EShapePolygon,
	x: number,
	y: number,
	ax: number,
	ay: number
): number => {
	const vertices = shape.vertices;
	const verticesLength = vertices.length;
	if (verticesLength < 4) {
		return Infinity;
	}
	let result = Infinity;
	const sx = 2 * ax;
	const sy = 2 * ay;
	let pvx = vertices[verticesLength - 2] * sx;
	let pvy = vertices[verticesLength - 1] * sy;
	for (let i = 0; i < verticesLength; i += 2) {
		const vx = vertices[i] * sx;
		const vy = vertices[i + 1] * sy;
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
	const filled = shape.fill.enable;
	if (!filled && sw <= 0) {
		return false;
	}
	const vertices = shape.vertices;
	const verticesLength = vertices.length;
	if (6 <= verticesLength) {
		if (0 < ax && 0 < ay) {
			let count = 0;
			const nx = 0.5 * (x / ax);
			const ny = 0.5 * (y / ay);
			let ppvy = vertices[verticesLength - 3];
			let pvx = vertices[verticesLength - 2];
			let pvy = vertices[verticesLength - 1];
			for (let i = 0; i < verticesLength; i += 2) {
				const vx = vertices[i];
				const vy = vertices[i + 1];
				if ((pvy <= ny && ny < vy) || (ny <= pvy && vy < ny)) {
					const dy = vy - pvy;
					let t = 0;
					if (0 < Math.abs(dy)) {
						t = (ny - pvy) / dy;
					}
					const cx = pvx + t * (vx - pvx);
					if (nx <= cx) {
						if (t <= 0) {
							// Since we could be just grazing vertices,
							// we need to check if the second-previous vertex is on the opposite side.
							if ((ppvy <= ny && ny < vy) || (ny <= ppvy && vy < ny)) {
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
					return true;
				} else {
					return calcPolygonSquaredDistance(shape, x, y, ax, ay) <= sw * sw;
				}
			}
		}
	}
	return false;
};
