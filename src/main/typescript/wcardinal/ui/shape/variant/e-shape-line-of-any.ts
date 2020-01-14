/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "../e-shape";
import {
	EShapeLineOfAnyPoints, EShapeLineOfAnyPointsHitTester, EShapeLineOfAnyPointsTestRange,
	EShapeLineOfAnyPointsToHitThreshold
} from "./e-shape-line-of-any-points";

export interface EShapeLineOfAny extends EShape {
	points: EShapeLineOfAnyPoints;
	calcHitPoint<RESULT>(
		point: IPoint,
		toThreshold: EShapeLineOfAnyPointsToHitThreshold | null,
		range: EShapeLineOfAnyPointsTestRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT> | null,
		result: RESULT
	): boolean;
}
