/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toIndexOf } from "../util/to-index-of";
import { EShapePointsFormatterResult } from "./e-shape-points-formatter-result";
import { EShapePointsFormatterSource } from "./e-shape-points-formatter-source";
import { EShapePointsStyle } from "./e-shape-points-style";

const acopy = (source: number[], result: number[]): number[] => {
	const sourceLength = source.length;
	for (let i = 0; i < sourceLength; ++i) {
		result[i] = source[i];
	}
	if (result.length !== sourceLength) {
		result.length = sourceLength;
	}
	return result;
};

export const eShapePointsFormatterStraight = (
	source: EShapePointsFormatterSource,
	result: EShapePointsFormatterResult
): EShapePointsFormatterResult => {
	const length = source.length;
	const values = source.values;
	const segments = source.segments;
	const style = source.style;
	const rvalues = result.values;
	let rvaluesCount = -1;
	if (0 < length) {
		const x0 = values[0];
		const y0 = values[1];
		let x1 = x0;
		let y1 = y0;
		rvalues[++rvaluesCount] = x0;
		rvalues[++rvaluesCount] = y0;
		const r = 0.7071067811865475;
		for (let i = 1; i < length; ++i) {
			const index = i << 1;
			const x2 = values[index];
			const y2 = values[index + 1];
			const dx = x2 - x1;
			const dy = y2 - y1;
			const ax = Math.abs(dx);
			const ay = Math.abs(dy);
			const az = Math.abs(r * ax + r * ay);
			if (ax < ay) {
				if (ay < az) {
					const aw = Math.min(ax, ay);
					x1 += aw * Math.sign(dx);
					y1 += aw * Math.sign(dy);
				} else {
					y1 = y2;
				}
			} else {
				if (ax < az) {
					const aw = Math.min(ax, ay);
					x1 += aw * Math.sign(dx);
					y1 += aw * Math.sign(dy);
				} else {
					x1 = x2;
				}
			}
			rvalues[++rvaluesCount] = x1;
			rvalues[++rvaluesCount] = y1;
		}
		if (style & EShapePointsStyle.CLOSED) {
			const dx = x0 - x1;
			const dy = y0 - y1;
			const ax = Math.abs(dx);
			const ay = Math.abs(dy);
			const az = Math.abs(r * ax + r * ay);
			const threshold = 0.001;
			if (threshold < ax && threshold < ay && threshold < az && toIndexOf(segments, 0) < 0) {
				if (ax < ay) {
					if (ay < az) {
						const aw = Math.min(ax, ay);
						x1 += aw * Math.sign(dx);
						y1 += aw * Math.sign(dy);
					} else {
						y1 = y0;
					}
				} else {
					if (ax < az) {
						const aw = Math.min(ax, ay);
						x1 += aw * Math.sign(dx);
						y1 += aw * Math.sign(dy);
					} else {
						x1 = x0;
					}
				}
				rvalues[++rvaluesCount] = x1;
				rvalues[++rvaluesCount] = y1;
			}
		}
	}
	rvaluesCount += 1;
	if (rvalues.length !== rvaluesCount) {
		rvalues.length = rvaluesCount;
	}
	acopy(segments, result.segments);
	result.length = rvaluesCount >> 1;
	result.style = style;
	return result;
};
