/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toIndexOf } from "../util/to-index-of";
import { EShapeDefaults } from "./e-shape-defaults";
import { EShapePointsFormattedWithoutBoundary } from "./e-shape-points-formatted";
import { EShapePointsFormatter } from "./e-shape-points-formatter";
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

const amix = (
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	t: number,
	result: number[]
): number[] => {
	const u = 1 - t;
	result[0] = x0 * u + x1 * t;
	result[1] = y0 * u + y1 * t;
	return result;
};

const interpolate2 = (
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	is0: number,
	is1: number,
	nsegment: number,
	rvalues: number[],
	rvaluesCount: number
): number => {
	const v3 = [0, 0];
	const v4 = [0, 0];
	const v5 = [0, 0];
	for (let is = is0; is < is1; ++is) {
		const t = is / nsegment;
		amix(x0, y0, x1, y1, t, v3);
		amix(x1, y1, x2, y2, t, v4);
		amix(v3[0], v3[1], v4[0], v4[1], t, v5);
		rvalues[++rvaluesCount] = v5[0];
		rvalues[++rvaluesCount] = v5[1];
	}
	return rvaluesCount;
};

const interpolate1 = (
	length: number,
	values: number[],
	segments: number[],
	isClosed: boolean,
	nsegment: number,
	result: EShapePointsFormattedWithoutBoundary
) => {
	const rvalues = result.values;
	const rsegments = result.segments;

	if (length <= 2) {
		acopy(values, rvalues);
		acopy(segments, rsegments);
		return result;
	}

	let rvaluesCount = -1;
	let rsegmentsCount = -1;
	const ism = nsegment >> 1;
	if (isClosed) {
		let i = 0;
		for (; i + 2 < length; i += 2) {
			const j = i << 1;
			const s0 = 0 <= toIndexOf(segments, i + 1);
			const s1 = 0 <= toIndexOf(segments, i + 2);
			if (s0 && s1) {
				rvalues[++rvaluesCount] = values[j + 0];
				rvalues[++rvaluesCount] = values[j + 1];
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
			} else if (s0) {
				rvalues[++rvaluesCount] = values[j + 0];
				rvalues[++rvaluesCount] = values[j + 1];
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[j + 4],
					values[j + 5],
					ism,
					nsegment,
					nsegment,
					rvalues,
					rvaluesCount
				);
			} else if (s1) {
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[j + 4],
					values[j + 5],
					0,
					ism,
					nsegment,
					rvalues,
					rvaluesCount
				);
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
			} else {
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[j + 4],
					values[j + 5],
					0,
					nsegment,
					nsegment,
					rvalues,
					rvaluesCount
				);
			}
		}
		if (i + 1 < length) {
			const j = i << 1;
			const s0 = 0 <= toIndexOf(segments, i + 1);
			const s1 = 0 <= toIndexOf(segments, 0);
			if (s0 && s1) {
				rvalues[++rvaluesCount] = values[0];
				rvalues[++rvaluesCount] = values[1];
				rsegments.unshift(0);
				rsegmentsCount += 1;
			} else if (s0) {
				rvalues[++rvaluesCount] = values[j + 0];
				rvalues[++rvaluesCount] = values[j + 1];
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[0],
					values[1],
					ism,
					nsegment,
					nsegment,
					rvalues,
					rvaluesCount
				);
			} else if (s1) {
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[0],
					values[1],
					0,
					ism,
					nsegment,
					rvalues,
					rvaluesCount
				);
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
			} else {
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[0],
					values[1],
					0,
					nsegment,
					nsegment,
					rvalues,
					rvaluesCount
				);
			}
		} else if (i < length) {
			const j = i << 1;
			rvalues[++rvaluesCount] = values[j + 0];
			rvalues[++rvaluesCount] = values[j + 1];
			if (0 <= toIndexOf(segments, 0)) {
				rsegments.unshift(0);
				rsegmentsCount += 1;
			}
		}
	} else {
		let i = 0;
		for (; i + 2 < length; i += 2) {
			const j = i << 1;
			const s0 = 0 <= toIndexOf(segments, i + 1);
			const s1 = 0 <= toIndexOf(segments, i + 2);
			if (s0 && s1) {
				rvalues[++rvaluesCount] = values[j + 0];
				rvalues[++rvaluesCount] = values[j + 1];
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
			} else if (s0) {
				rvalues[++rvaluesCount] = values[j + 0];
				rvalues[++rvaluesCount] = values[j + 1];
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[j + 4],
					values[j + 5],
					ism,
					nsegment,
					nsegment,
					rvalues,
					rvaluesCount
				);
			} else if (s1) {
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[j + 4],
					values[j + 5],
					0,
					ism,
					nsegment,
					rvalues,
					rvaluesCount
				);
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
			} else {
				rvaluesCount = interpolate2(
					values[j + 0],
					values[j + 1],
					values[j + 2],
					values[j + 3],
					values[j + 4],
					values[j + 5],
					0,
					nsegment,
					nsegment,
					rvalues,
					rvaluesCount
				);
			}
		}
		for (; i + 1 < length; ++i) {
			const j = i << 1;
			rvalues[++rvaluesCount] = values[j + 0];
			rvalues[++rvaluesCount] = values[j + 1];
			rvalues[++rvaluesCount] = values[j + 2];
			rvalues[++rvaluesCount] = values[j + 3];
			if (0 <= toIndexOf(segments, i + 1)) {
				rsegments[++rsegmentsCount] = (rvaluesCount >> 1) + 1;
			}
		}
		for (; i < length; ++i) {
			const j = i << 1;
			rvalues[++rvaluesCount] = values[j + 0];
			rvalues[++rvaluesCount] = values[j + 1];
		}
	}

	rvaluesCount += 1;
	if (rvalues.length !== rvaluesCount) {
		rvalues.length = rvaluesCount;
	}

	rsegmentsCount += 1;
	if (rsegments.length !== rsegmentsCount) {
		rsegments.length = rsegmentsCount;
	}
	return result;
};

export const eShapePointsFormatterCurveBezierQuadratic: EShapePointsFormatter = (
	length: number,
	values: number[],
	segments: number[],
	style: EShapePointsStyle,
	result: EShapePointsFormattedWithoutBoundary
): EShapePointsFormattedWithoutBoundary => {
	interpolate1(
		length,
		values,
		segments,
		!!(style & EShapePointsStyle.CLOSED),
		EShapeDefaults.CURVE_SEGMENT_COUNT,
		result
	);
	result.length = result.values.length >> 1;
	result.style = style;
	return result;
};
