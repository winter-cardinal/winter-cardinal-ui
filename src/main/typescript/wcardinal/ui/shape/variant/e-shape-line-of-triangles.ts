/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeType } from "../e-shape-type";
import { EShapeLineOfAny } from "./e-shape-line-of-any";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsHitTester } from "./e-shape-line-of-any-points-hit-tester";
import { EShapeLineOfAnyPointsHitTesterToRange } from "./e-shape-line-of-any-points-hit-tester-to-range";
import { EShapeLineOfAnyPointsHitTesterToThreshold } from "./e-shape-line-of-any-points-hit-tester-to-threshold";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeTriangle } from "./e-shape-triangle";
import { toThresholdDefault } from "./to-threshold-default";

export class EShapeLineOfTriangles extends EShapeTriangle implements EShapeLineOfAny {
	protected declare _points: EShapeLineOfAnyPoints;
	protected _tester: EShapeLineOfAnyPointsHitTester<unknown>;
	protected _testerBBox: EShapeLineOfAnyPointsHitTester<unknown>;

	constructor() {
		super(EShapeType.LINE_OF_TRIANGLES);
		this._points = new EShapeLineOfAnyPointsImpl(this);

		this._tester = (x, y, ax, ay, ox, oy, px, py, sw, ss): boolean => {
			return this.containsPointAbs(x, y, ax, ay, ox, oy, px, py, sw, ss);
		};

		this._testerBBox = (x, y, ax, ay, ox, oy, px, py): boolean => {
			return this.containsPointAbsBBox(x, y, ax, ay, ox, oy, px, py);
		};
	}

	get points(): EShapeLineOfAnyPoints {
		return this._points;
	}

	clone(): EShapeLineOfTriangles {
		return new EShapeLineOfTriangles().copy(this);
	}

	containsAbs(x: number, y: number, ax: number, ay: number, sw: number, ss: number): boolean {
		const threshold = toThresholdDefault(sw, ss, this._points.size.getLimit());
		if (this.containsAbsBBox(x, y, ax + threshold, ay + threshold)) {
			return this._points.calcHitPointAbs(x, y, sw, ss, threshold, null, this._tester, null);
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
		ss: number
	): boolean {
		return super.containsAbs(x - px - ox, y - py - oy, ax, ay, sw, ss);
	}

	containsPointAbsBBox(
		x: number,
		y: number,
		ax: number,
		ay: number,
		ox: number,
		oy: number,
		px: number,
		py: number
	): boolean {
		return super.containsAbsBBox(x - px - ox, y - py - oy, ax, ay);
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		toThreshold: EShapeLineOfAnyPointsHitTesterToThreshold | null,
		toRange: EShapeLineOfAnyPointsHitTesterToRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT> | null,
		result: RESULT
	): boolean {
		const data = this.toHitTestData(point);
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
				threshold,
				toRange,
				tester || this._tester,
				result
			);
		}
		return false;
	}
}
