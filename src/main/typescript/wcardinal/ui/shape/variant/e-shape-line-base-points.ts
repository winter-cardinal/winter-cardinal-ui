/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePoints } from "../e-shape-points";
import { EShapeLineBasePointsHitTester } from "./e-shape-line-base-points-hit-tester";
import { EShapeLineBasePointsHitTesterToRange } from "./e-shape-line-base-points-hit-tester-to-range";

export interface EShapeLineBasePoints extends EShapePoints {
	calcHitPointAbs<RESULT>(
		x: number,
		y: number,
		ax: number,
		ay: number,
		threshold: number,
		toRange: EShapeLineBasePointsHitTesterToRange | null,
		tester: EShapeLineBasePointsHitTester<RESULT>,
		result: RESULT
	): boolean;
}
