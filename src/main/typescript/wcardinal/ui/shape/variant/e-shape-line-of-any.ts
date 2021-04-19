/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsHitTester } from "./e-shape-line-of-any-points-hit-tester";
import { EShapeLineOfAnyPointsHitTesterToRange } from "./e-shape-line-of-any-points-hit-tester-to-range";
import { EShapeLineOfAnyPointsHitTesterToThreshold } from "./e-shape-line-of-any-points-hit-tester-to-threshold";

export interface EShapeLineOfAny extends EShape {
	readonly points: EShapeLineOfAnyPoints;
	containsPointAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		ox: number,
		oy: number,
		px: number,
		py: number
	): boolean;
	containsPointAbsBBox(
		x: number,
		y: number,
		ax: number,
		ay: number,
		ox: number,
		oy: number,
		px: number,
		py: number
	): boolean;
	calcHitPoint<RESULT>(
		point: IPoint,
		toThreshold: EShapeLineOfAnyPointsHitTesterToThreshold | null,
		toRange: EShapeLineOfAnyPointsHitTesterToRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT> | null,
		result: RESULT
	): boolean;
}
