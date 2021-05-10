/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeBaseHitTestData } from "./e-shape-base-hit-test-data";
import { EShapeLineBasePoints } from "./e-shape-line-base-points";
import { EShapeLineBasePointsHitTester } from "./e-shape-line-base-points-hit-tester";
import { EShapeLineBasePointsHitTesterToRange } from "./e-shape-line-base-points-hit-tester-to-range";
import { EShapeLineBasePointsHitTesterToThreshold } from "./e-shape-line-base-points-hit-tester-to-threshold";
import { EShapePrimitive } from "./e-shape-primitive";
import { toThresholdDefault } from "./to-threshold-default";

export abstract class EShapeLineBase extends EShapePrimitive {
	protected static WORK_RANGE: [number, number] = [0, 0];
	protected declare _points: EShapeLineBasePoints;
	abstract clone(): EShapeLineBase;

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = this._points.serialize(manager);
		return result;
	}

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

	containsAbs(x: number, y: number, ax: number, ay: number, sw: number, ss: number): boolean {
		const points = this._points;
		const threshold = toThresholdDefault(sw, ss, 0);
		if (this.containsAbsBBox(x, y, ax + threshold, ay + threshold)) {
			return points.calcHitPointAbs(
				x,
				y,
				ax,
				ay,
				threshold,
				null,
				this.calcHitPointAbsHitTester,
				null
			);
		}
		return false;
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		toThreshold: EShapeLineBasePointsHitTesterToThreshold | null,
		toRange: EShapeLineBasePointsHitTesterToRange | null,
		tester: EShapeLineBasePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const points = this._points;
		const data = this.toHitTestData(point);
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
