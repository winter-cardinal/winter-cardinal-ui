/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toIndexOf } from "./to-index-of";

export interface UtilCurveParameter {
	center: [number, number];
	axis1: [number, number];
	axis2: [number, number];
	angle: [number, number, number];
}

export type UtilCurveToParameter = (
	index: number,
	length: number,
	values: number[],
	result: UtilCurveParameter
) => UtilCurveParameter;

export type UtilCurveInterpolated = {
	values: number[];
	segments: number[];
};

const PID = Math.PI * 2;
const PIH = Math.PI * 0.5;

const vdot = (x0: number, y0: number, x1: number, y1: number): number => {
	return x0 * x1 + y0 * y1;
};

const vlen = (x0: number, y0: number): number => {
	return Math.sqrt(vdot(x0, y0, x0, y0));
};

const vcross = (x0: number, y0: number, x1: number, y1: number): number => {
	return x0 * y1 - y0 * x1;
};

const pnew = (): UtilCurveParameter => {
	return {
		center: [0, 0],
		axis1: [0, 0],
		axis2: [0, 0],
		angle: [0, 0, 0]
	};
};

const pset = (
	cx: number,
	cy: number,
	a1x: number,
	a1y: number,
	a2x: number,
	a2y: number,
	angle1: number,
	angle2: number,
	angle3: number,
	result: UtilCurveParameter
): UtilCurveParameter => {
	const c = result.center;
	c[0] = cx;
	c[1] = cy;
	const a1 = result.axis1;
	a1[0] = a1x;
	a1[1] = a1y;
	const a2 = result.axis2;
	a2[0] = a2x;
	a2[1] = a2y;
	const a = result.angle;
	a[0] = angle1;
	a[1] = angle2;
	a[2] = angle3;
	return result;
};

const pcopy = (source: UtilCurveParameter, result: UtilCurveParameter): UtilCurveParameter => {
	const c = source.center;
	const a1 = source.axis1;
	const a2 = source.axis2;
	const a = source.angle;
	return pset(c[0], c[1], a1[0], a1[1], a2[0], a2[1], a[0], a[1], a[2], result);
};

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

/**
 * An utility class for spline curves based on the work of Cem Yuksel.
 * Pleaase refer to the paper `A class of C2 interpolating splines`.
 * http://www.cemyuksel.com/research/interpolating_splines/
 */
export class UtilCurve {
	protected static WORK_P0?: UtilCurveParameter;
	protected static WORK_P1?: UtilCurveParameter;
	protected static WORK_P2?: UtilCurveParameter;

	public static toCircle = (
		index: number,
		length: number,
		values: number[],
		result: UtilCurveParameter
	): UtilCurveParameter => {
		const index0 = 0 < index ? index - 1 : length - 1;
		const index1 = index;
		const index2 = index < length - 1 ? index + 1 : 0;

		const i0 = index0 << 1;
		const i1 = index1 << 1;
		const i2 = index2 << 1;

		const x0 = values[i0 + 0];
		const y0 = values[i0 + 1];
		const x1 = values[i1 + 0];
		const y1 = values[i1 + 1];
		const x2 = values[i2 + 0];
		const y2 = values[i2 + 1];

		const d01x = x1 - x0;
		const d01y = y1 - y0;
		const d12x = x2 - x1;
		const d12y = y2 - y1;

		const m1x = x0 + d01x * 0.5;
		const m1y = y0 + d01y * 0.5;
		const m2x = x1 + d12x * 0.5;
		const m2y = y1 + d12y * 0.5;

		const n1x = -d01y;
		const n1y = +d01x;
		const n2x = -d12y;
		const n2y = +d12x;

		let det = vcross(n1x, n1y, n2x, n2y);
		const threshold = 0.001;
		if (Math.abs(det) < threshold) {
			if (0 <= vdot(d01x, d01y, d12x, d12y) || length <= 2) {
				const a = 0.01;
				const s = Math.sin(a);
				const l1 = vlen(d01x, d01y);
				const l2 = vlen(d12x, d12y);
				return pset(x1, y1, 0, 0, d12x / s, d12y / s, (-a * l1) / l2, 0, a, result);
			} else {
				det = threshold;
			}
		}
		const s = (n2y * (m2x - m1x) + n2x * (m1y - m2y)) / det;
		const cx = m1x + s * n1x;
		const cy = m1y + s * n1y;

		const a1x = x1 - cx;
		const a1y = y1 - cy;

		const a2x = -a1y;
		const a2y = +a1x;

		const dc2x = x2 - cx;
		const dc2y = y2 - cy;

		let a2 = Math.atan2(vdot(a2x, a2y, dc2x, dc2y), vdot(a1x, a1y, dc2x, dc2y));

		const dc0x = x0 - cx;
		const dc0y = y0 - cy;

		let a1 = Math.atan2(vdot(a2x, a2y, dc0x, dc0y), vdot(a1x, a1y, dc0x, dc0y));
		if (0 < a1 * a2) {
			if (Math.abs(a1) < Math.abs(a2)) {
				if (0 < a2) {
					a2 -= PID;
				} else {
					a2 += PID;
				}
			}
			if (Math.abs(a2) < Math.abs(a1)) {
				if (0 < a1) {
					a1 -= PID;
				} else {
					a1 += PID;
				}
			}
		}
		return pset(cx, cy, a1x, a1y, a2x, a2y, a1, 0, a2, result);
	};

	public static toEllipse = (
		index: number,
		length: number,
		values: number[],
		result: UtilCurveParameter
	): UtilCurveParameter => {
		const index0 = 0 < index ? index - 1 : length - 1;
		const index1 = index;
		const index2 = index < length - 1 ? index + 1 : 0;

		const i0 = index0 << 1;
		const i1 = index1 << 1;
		const i2 = index2 << 1;

		const x0 = values[i0 + 0];
		const y0 = values[i0 + 1];
		const x1 = values[i1 + 0];
		const y1 = values[i1 + 1];
		const x2 = values[i2 + 0];
		const y2 = values[i2 + 1];

		const d10x = x0 - x1;
		const d10y = y0 - y1;
		const d12x = x2 - x1;
		const d12y = y2 - y1;

		if (length <= 2) {
			const a = 0.01;
			const s = Math.sin(a);
			return pset(x1, y1, 0, 0, d12x / s, d12y / s, -a, 0, a, result);
		}

		const l0 = vlen(d10x, d10y);
		const l2 = vlen(d12x, d12y);
		const cos = vdot(d10x, d10y, d12x, d12y) / (l0 * l2);
		const amax = Math.acos(cos);
		let acurrent = amax * 0.5;
		let adelta = amax * 0.25;
		let a = 0;
		let b = 0;
		let c = 0;
		let d = 0;
		const lmax = Math.max(l0, l2);
		const lmin = Math.min(l0, l2);
		for (let i = 0; i < 16; ++i) {
			const a0 = acurrent * 0.5;
			const a1 = amax - a0;
			a = lmax * Math.sin(a0);
			b = lmax * Math.cos(a0);
			c = lmin * Math.sin(a1);
			d = lmin * Math.cos(a1);
			const v = (1 - d / b) * (1 - d / b) + (c * c) / (a * a);
			if (1 < v) {
				acurrent += adelta;
			} else {
				acurrent -= adelta;
			}
			adelta *= 0.5;
		}
		const beta = Math.asin(Math.min(c / a, 1));
		if (l0 < l2) {
			const e3x = d12x / l2;
			const e3y = d12y / l2;
			let n3x, n3y;
			if (0 < vcross(d10x, d10y, d12x, d12y)) {
				n3x = +e3y;
				n3y = -e3x;
			} else {
				n3x = -e3y;
				n3y = +e3x;
			}
			const we = -(b * b) / l2;
			const wn = -(b * a) / l2;
			const a1x = we * e3x + wn * n3x;
			const a1y = we * e3y + wn * n3y;
			const cx = x1 - a1x;
			const cy = y1 - a1y;
			const a2x = x2 - cx;
			const a2y = y2 - cy;
			return pset(cx, cy, a1x, a1y, a2x, a2y, -beta, 0, PIH, result);
		} else {
			const e0x = d10x / l0;
			const e0y = d10y / l0;
			let n3x, n3y;
			if (vcross(d10x, d10y, d12x, d12y) < 0) {
				n3x = +e0y;
				n3y = -e0x;
			} else {
				n3x = -e0y;
				n3y = +e0x;
			}
			const we = -(b * b) / l0;
			const wn = -(b * a) / l0;
			const a1x = we * e0x + wn * n3x;
			const a1y = we * e0y + wn * n3y;
			const cx = x1 - a1x;
			const cy = y1 - a1y;
			const a2x = x0 - cx;
			const a2y = y0 - cy;
			return pset(cx, cy, a1x, a1y, -a2x, -a2y, -PIH, 0, beta, result);
		}
	};

	public static toHybrid = (
		index: number,
		length: number,
		values: number[],
		result: UtilCurveParameter
	): UtilCurveParameter => {
		const circle = UtilCurve.toCircle(index, length, values, result);
		const a0 = circle.angle[0];
		const a2 = circle.angle[2];
		const amin = Math.min(a0, a2);
		const amax = Math.max(a0, a2);
		if (amin < -PIH || PIH < amax) {
			return UtilCurve.toEllipse(index, length, values, result);
		}
		return circle;
	};

	public static set(
		center1: [number, number],
		angle10: number,
		angle11: number,
		axis11: [number, number],
		axis12: [number, number],

		center2: [number, number],
		angle20: number,
		angle21: number,
		axis21: [number, number],
		axis22: [number, number],

		nsegment: number,
		isAdaptive: boolean,
		isEdge: boolean,

		result: number[],
		resultIndex: number
	): number {
		const a = Math.max(Math.abs(angle10 - angle11), Math.abs(angle20 - angle21));
		const n = isAdaptive ? Math.max(1, Math.round(nsegment * (a / PIH))) : nsegment;
		const imax = isEdge ? n + 1 : n;
		for (let i = 0; i < imax; ++i) {
			const t = i / n;
			const w0 = 1 - t;
			const w1 = t;

			const t1 = w0 * angle10 + w1 * angle11;
			const c1 = Math.cos(t1);
			const s1 = Math.sin(t1);
			const x1 = center1[0] + c1 * axis11[0] + s1 * axis12[0];
			const y1 = center1[1] + c1 * axis11[1] + s1 * axis12[1];

			const t2 = w0 * angle20 + w1 * angle21;
			const c2 = Math.cos(t2);
			const s2 = Math.sin(t2);
			const x2 = center2[0] + c2 * axis21[0] + s2 * axis22[0];
			const y2 = center2[1] + c2 * axis21[1] + s2 * axis22[1];

			const t3 = PIH * t;
			const c3 = Math.cos(t3);
			const s3 = Math.sin(t3);
			const cc3 = c3 * c3;
			const ss3 = s3 * s3;

			const x3 = cc3 * x1 + ss3 * x2;
			const y3 = cc3 * y1 + ss3 * y2;
			result[++resultIndex] = x3;
			result[++resultIndex] = y3;
		}
		return resultIndex;
	}

	/**
	 * Calculate an interpolated points of the given control points.
	 *
	 * @param length A number of control points.
	 * @param values An array of control points.
	 * @param toParameter An interpolation method.
	 * @param isClosed True if the line is closed.
	 * @param nsegment The number of segments per 90 degree if isAdaptive is true.
	 * If isAdaptive is false, the number of segments is fixed to the given number
	 * regardless of arc angles.
	 * @param isAdaptive True to adjust the number of segments adaptively.
	 * @returns An interpolated points of the given control points.
	 */
	public static interpolate(
		length: number,
		values: number[],
		segments: number[],
		toParameter: UtilCurveToParameter,
		isClosed: boolean,
		nsegment: number,
		isAdaptive: boolean,
		result: UtilCurveInterpolated
	): UtilCurveInterpolated {
		const rvalues: number[] = result.values;
		const rsegments: number[] = result.segments;

		if (length <= 2) {
			return {
				values: acopy(values, rvalues),
				segments: acopy(segments, rsegments)
			};
		}

		const c0 = this.WORK_P0 || pnew();
		let c1 = this.WORK_P1 || pnew();
		let c2 = this.WORK_P2 || pnew();
		this.WORK_P0 = c0;
		this.WORK_P1 = c1;
		this.WORK_P2 = c2;
		let rvaluesCount = -1;
		let rsegmentCount = -1;
		if (isClosed) {
			toParameter(0, length, values, c0);
			pcopy(c0, c1);
			for (let i = 1; i < length; ++i) {
				toParameter(i, length, values, c2);
				if (0 <= toIndexOf(segments, i)) {
					const index = (i - 1) << 1;
					rvalues[++rvaluesCount] = values[index + 0];
					rvalues[++rvaluesCount] = values[index + 1];
					rsegments[++rsegmentCount] = (rvaluesCount + 1) >> 1;
				} else {
					rvaluesCount = this.set(
						c1.center,
						c1.angle[1],
						c1.angle[2],
						c1.axis1,
						c1.axis2,

						c2.center,
						c2.angle[0],
						c2.angle[1],
						c2.axis1,
						c2.axis2,

						nsegment,
						isAdaptive,
						false,

						rvalues,
						rvaluesCount
					);
				}
				const c3 = c1;
				c1 = c2;
				c2 = c3;
			}
			if (0 <= toIndexOf(segments, 0)) {
				const index = (length - 1) << 1;
				rvalues[++rvaluesCount] = values[index + 0];
				rvalues[++rvaluesCount] = values[index + 1];
				rsegments.unshift(0);
				rsegmentCount += 1;
			} else {
				rvaluesCount = this.set(
					c1.center,
					c1.angle[1],
					c1.angle[2],
					c1.axis1,
					c1.axis2,

					c0.center,
					c0.angle[0],
					c0.angle[1],
					c0.axis1,
					c0.axis2,

					nsegment,
					isAdaptive,
					false,

					rvalues,
					rvaluesCount
				);
			}
		} else {
			toParameter(1, length, values, c0);
			if (0 <= toIndexOf(segments, 1)) {
				rvalues[++rvaluesCount] = values[0];
				rvalues[++rvaluesCount] = values[1];
				rsegments[++rsegmentCount] = 1;
			} else {
				rvaluesCount = this.set(
					c0.center,
					c0.angle[0],
					c0.angle[1],
					c0.axis1,
					c0.axis2,

					c0.center,
					c0.angle[0],
					c0.angle[1],
					c0.axis1,
					c0.axis2,

					nsegment,
					isAdaptive,
					false,

					rvalues,
					rvaluesCount
				);
			}
			pcopy(c0, c1);
			for (let i = 2, imax = length - 1; i < imax; ++i) {
				toParameter(i, length, values, c2);
				if (0 <= toIndexOf(segments, i)) {
					const index = (i - 1) << 1;
					rvalues[++rvaluesCount] = values[index + 0];
					rvalues[++rvaluesCount] = values[index + 1];
					rsegments[++rsegmentCount] = (rvaluesCount + 1) >> 1;
				} else {
					rvaluesCount = this.set(
						c1.center,
						c1.angle[1],
						c1.angle[2],
						c1.axis1,
						c1.axis2,

						c2.center,
						c2.angle[0],
						c2.angle[1],
						c2.axis1,
						c2.axis2,

						nsegment,
						isAdaptive,
						false,

						rvalues,
						rvaluesCount
					);
				}
				const c3 = c1;
				c1 = c2;
				c2 = c3;
			}

			if (0 <= toIndexOf(segments, length - 1)) {
				const index = (length - 2) << 1;
				rvalues[++rvaluesCount] = values[index + 0];
				rvalues[++rvaluesCount] = values[index + 1];
				rsegments[++rsegmentCount] = (rvaluesCount + 1) >> 1;
			} else {
				rvaluesCount = this.set(
					c1.center,
					c1.angle[1],
					c1.angle[2],
					c1.axis1,
					c1.axis2,

					c1.center,
					c1.angle[1],
					c1.angle[2],
					c1.axis1,
					c1.axis2,

					nsegment,
					isAdaptive,
					true,

					rvalues,
					rvaluesCount
				);
			}
		}

		rvaluesCount += 1;
		if (rvalues.length !== rvaluesCount) {
			rvalues.length = rvaluesCount;
		}

		rsegmentCount += 1;
		if (rsegments.length !== rsegmentCount) {
			rsegments.length = rsegmentCount;
		}
		return result;
	}
}
