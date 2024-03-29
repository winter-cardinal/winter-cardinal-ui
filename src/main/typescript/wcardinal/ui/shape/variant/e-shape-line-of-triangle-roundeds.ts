/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeLineOfAny } from "./e-shape-line-of-any";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsHitTester } from "./e-shape-line-of-any-points-hit-tester";
import { EShapeLineOfAnyPointsHitTesterToRange } from "./e-shape-line-of-any-points-hit-tester-to-range";
import { EShapeLineOfAnyPointsHitTesterToThreshold } from "./e-shape-line-of-any-points-hit-tester-to-threshold";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeTriangleRounded } from "./e-shape-triangle-rounded";
import { toThresholdDefault } from "./to-threshold-default";

export class EShapeLineOfTriangleRoundeds extends EShapeTriangleRounded implements EShapeLineOfAny {
	protected declare _points: EShapeLineOfAnyPoints;
	protected _tester: EShapeLineOfAnyPointsHitTester<unknown>;

	constructor(type: EShapeType = EShapeType.LINE_OF_TRIANGLE_ROUNDEDS) {
		super(type);
		this._points = new EShapeLineOfAnyPointsImpl(this);

		this._tester = (x, y, ax, ay, ox, oy, px, py, sw, ss, sa): boolean => {
			return this.containsPointAbs(x, y, ax, ay, ox, oy, px, py, sw, ss, sa);
		};
	}

	get points(): EShapeLineOfAnyPoints {
		return this._points;
	}

	clone(): EShapeLineOfTriangleRoundeds {
		return new EShapeLineOfTriangleRoundeds(this.type).copy(this);
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
		const threshold = toThresholdDefault(sw, ss, this._points.size.getLimit());
		if (this.containsAbsBBox(x, y, ax + threshold, ay + threshold)) {
			return this._points.calcHitPointAbs(
				x,
				y,
				sw,
				ss,
				sa,
				threshold,
				null,
				this._tester,
				null
			);
		}
		return false;
	}

	containsPointAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		ox: number,
		oy: number,
		px: number,
		py: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		return super.containsAbs(x - px - ox, y - py - oy, ax, ay, sw, ss, sa);
	}

	calcHitPoint<RESULT>(
		x: number,
		y: number,
		toThreshold: EShapeLineOfAnyPointsHitTesterToThreshold | null,
		toRange: EShapeLineOfAnyPointsHitTesterToRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT> | null,
		result: RESULT
	): boolean {
		const data = this.toHitTestData(x, y);
		const threshold = (toThreshold || toThresholdDefault)(
			data.strokeWidth,
			data.strokeScale,
			this._points.size.getLimit()
		);
		if (this.containsAbsBBox(data.x, data.y, data.width + threshold, data.height + threshold)) {
			return this._points.calcHitPointAbs(
				data.x,
				data.y,
				data.strokeWidth,
				data.strokeScale,
				data.strokeAlign,
				threshold,
				toRange,
				tester || this._tester,
				result
			);
		}
		return false;
	}
}
