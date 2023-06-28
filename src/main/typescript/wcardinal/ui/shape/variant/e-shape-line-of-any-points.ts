/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePoints } from "../e-shape-points";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsHitTester } from "./e-shape-line-of-any-points-hit-tester";
import { EShapeLineOfAnyPointsHitTesterToRange } from "./e-shape-line-of-any-points-hit-tester-to-range";
import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";

export interface EShapeLineOfAnyPoints extends EShapePoints {
	readonly size: EShapeLineOfAnyPointsPoint;
	readonly offset: EShapeLineOfAnyPointsPoint;
	readonly fill: EShapeLineOfAnyPointsFill;
	readonly stroke: EShapeLineOfAnyPointsStroke;
	toFitted(x: number, y: number): void;
	calcHitPointAbs<RESULT>(
		x: number,
		y: number,
		sw: number,
		ss: number,
		sa: number,
		threshold: number,
		toRange: EShapeLineOfAnyPointsHitTesterToRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT>,
		result: RESULT
	): boolean;
}
