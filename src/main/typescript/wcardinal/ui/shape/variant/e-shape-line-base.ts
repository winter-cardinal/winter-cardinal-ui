/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePoints } from "../e-shape-points";
import { EShapePointsMarker } from "../e-shape-points-marker";
import { EShapePointsMarkerType } from "../e-shape-points-marker-type";
import { EShapeBaseHitTestData } from "./e-shape-base-hit-test-data";
import { EShapeLineBaseHitPart } from "./e-shape-line-base-hit-part";
import { EShapeLineBasePoints } from "./e-shape-line-base-points";
import { EShapeLineBasePointsHitTester } from "./e-shape-line-base-points-hit-tester";
import { EShapeLineBasePointsHitTesterToRange } from "./e-shape-line-base-points-hit-tester-to-range";
import { EShapeLineBasePointsHitTesterToThreshold } from "./e-shape-line-base-points-hit-tester-to-threshold";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestCircle } from "./hit-test-circle";
import { hitTestRectangle } from "./hit-test-rectangle";
import { hitTestTriangle } from "./hit-test-triangle";
import { toThresholdDefault } from "./to-threshold-default";

export abstract class EShapeLineBase<POINTS extends EShapeLineBasePoints> extends EShapePrimitive {
	protected abstract readonly _points: POINTS;
	abstract clone(): EShapeLineBase<POINTS>;

	protected getHitTestSize(result: EShapeBaseHitTestData): EShapeBaseHitTestData {
		const formatted = this._points.formatted;
		if ("boundary" in formatted) {
			const boundary = formatted.boundary;
			result.width = Math.max(Math.abs(boundary[0]), Math.abs(boundary[2]));
			result.height = Math.max(Math.abs(boundary[1]), Math.abs(boundary[3]));
		} else {
			super.getHitTestSize(result);
		}
		return result;
	}

	protected toMarkerSize(points: EShapePoints): number {
		let result = 0;
		const marker = points.getMarker();
		if (marker) {
			const head = marker.head;
			if (head.type !== EShapePointsMarkerType.NONE) {
				const size = head.size;
				result = Math.max(result, Math.max(Math.abs(size.x), Math.abs(size.y)) * 2);
			}

			const tail = marker.tail;
			if (tail.type !== EShapePointsMarkerType.NONE) {
				const size = tail.size;
				result = Math.max(result, Math.max(Math.abs(size.x), Math.abs(size.y)) * 2);
			}
		}
		return result;
	}

	protected containsAbsMarker(
		marker: EShapePointsMarker,
		x: number,
		y: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		const type = marker.type;
		if (type !== EShapePointsMarkerType.NONE) {
			const transform = marker.transform;
			const a = transform.a;
			const b = transform.b;
			const c = transform.c;
			const d = transform.d;
			const tx = transform.tx;
			const ty = transform.ty;
			const id = 1 / (a * d - c * b);
			const lx = (d * x - c * y + ty * c - tx * d) * id;
			const ly = (a * y - b * x - ty * a + tx * b) * id;

			const size = marker.size;
			let sx = 0.5 * size.x;
			let sy = 0.5 * size.y;
			if (sx < 0) {
				sx = -sx;
				x = -x;
			}
			if (sy < 0) {
				sy = -sy;
				y = -y;
			}

			const s = sw * ss * sa;
			sx += s;
			sy += s;

			switch (type) {
				case EShapePointsMarkerType.CIRCLE:
					return hitTestCircle(this, lx, ly, sx, sy, sw, ss);
				case EShapePointsMarkerType.TRIANGLE:
					return hitTestTriangle(this, lx, ly, sx, sy, sw, ss);
				case EShapePointsMarkerType.RECTANGLE:
					return hitTestRectangle(this, lx, ly, sx, sy, sw, ss);
			}
		}
		return false;
	}

	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		const points = this._points;
		const threshold = toThresholdDefault(sw, ss, 0);
		const margin = threshold + this.toMarkerSize(points);
		if (this.containsAbsBBox(x, y, ax + margin, ay + margin)) {
			const marker = points.getMarker();
			if (marker) {
				if (this.containsAbsMarker(marker.head, x, y, sw, ss, sa)) {
					return true;
				}
				if (this.containsAbsMarker(marker.tail, x, y, sw, ss, sa)) {
					return true;
				}
			}
			const tester = this.calcHitPointAbsHitTester;
			return points.calcHitPointAbs(x, y, ax, ay, threshold, null, tester, null);
		}
		return false;
	}

	calcHitPart(x: number, y: number): EShapeLineBaseHitPart {
		const data = this.toHitTestData(x, y);
		const sw = data.strokeWidth;
		const ss = data.strokeScale;
		const threshold = toThresholdDefault(sw, ss, 0);
		const points = this._points;
		const margin = threshold + this.toMarkerSize(points);
		const dx = data.x;
		const dy = data.y;
		const ax = data.width;
		const ay = data.height;
		if (this.containsAbsBBox(dx, dy, ax + margin, ay + margin)) {
			const marker = points.getMarker();
			if (marker) {
				const sa = data.strokeAlign;
				if (this.containsAbsMarker(marker.head, dx, dy, sw, ss, sa)) {
					return EShapeLineBaseHitPart.MARKER_HEAD;
				}
				if (this.containsAbsMarker(marker.tail, dx, dy, sw, ss, sa)) {
					return EShapeLineBaseHitPart.MARKER_TAIL;
				}
			}
			const tester = this.calcHitPointAbsHitTester;
			if (points.calcHitPointAbs(dx, dy, ax, ay, threshold, null, tester, null)) {
				return EShapeLineBaseHitPart.LINE;
			}
		}
		if (this.containsText(x, y)) {
			return EShapeLineBaseHitPart.TEXT;
		}
		if (this.containsChildren(x, y)) {
			return EShapeLineBaseHitPart.CHILDREN;
		}
		return EShapeLineBaseHitPart.NONE;
	}

	calcHitPoint<RESULT>(
		x: number,
		y: number,
		toThreshold: EShapeLineBasePointsHitTesterToThreshold | null,
		toRange: EShapeLineBasePointsHitTesterToRange | null,
		tester: EShapeLineBasePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const points = this._points;
		const data = this.toHitTestData(x, y);
		const threshold = (toThreshold || toThresholdDefault)(
			data.strokeWidth,
			data.strokeScale,
			0
		);
		if (this.containsAbsBBox(data.x, data.y, data.width + threshold, data.height + threshold)) {
			return points.calcHitPointAbs(
				data.x,
				data.y,
				data.width,
				data.height,
				threshold,
				toRange,
				tester,
				result
			);
		}
		return false;
	}

	protected calcHitPointAbsHitTester(
		this: unknown,
		x: number,
		y: number,
		p0x: number,
		p0y: number,
		p1x: number,
		p1y: number,
		index: number,
		threshold: number,
		result: unknown
	): boolean {
		// (x, y) = p0 + (p1 - p0) * t where 0 <= t <= 1
		// d0 := p1 - p0
		// d1 := v - p0
		// (p0.x + d0.x * t - x)^2 + (p0.y + d0.y * t - y)^2
		// (d0.x t - d1.x)^2 + (d0.y t - d1.y)^2
		// (d0.x^2 + d0.y^2) t^2 - 2 (d0.x * d1.x + d0.y * d1.y) t + (d1.x^2 + d1.y^2)
		// a := dot( d0, d0 )
		// b := dot( d0, d1 )
		// c := dot( d1, d1 )
		// a t^2 - 2 b t + c = a (t - b / a)^2 + c - b * b / a
		// t0 = b / a  min = c - b * b / a
		const d0x = p1x - p0x;
		const d0y = p1y - p0y;
		const d1x = x - p0x;
		const d1y = y - p0y;
		const a = d0x * d0x + d0y * d0y;
		const b = d0x * d1x + d0y * d1y;
		const c = d1x * d1x + d1y * d1y;
		if (0.0001 < a) {
			const t = Math.max(0, Math.min(1, b / a));
			const d = a * t * t - 2 * b * t + c;
			if (d < threshold * threshold) {
				return true;
			}
		}
		return false;
	}
}
