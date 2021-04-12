/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePoints } from "../e-shape-points";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";

export type EShapeLineOfAnyPointsToHitThreshold = (size: number, scale: number) => number;

export type EShapeLineOfAnyPointsTestRange = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	ox: number,
	oy: number,
	threshold: number,
	values: number[],
	result: [number, number]
) => [number, number];

export type EShapeLineOfAnyPointsHitTester<RESULT> = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	ox: number,
	oy: number,
	px: number,
	py: number,
	index: number,
	threshold: number,
	result: RESULT
) => boolean;

export interface EShapeLineOfAnyPoints extends EShapePoints {
	readonly size: EShapeLineOfAnyPointsPoint;
	readonly offset: EShapeLineOfAnyPointsPoint;
	readonly fill: EShapeLineOfAnyPointsFill;
	readonly stroke: EShapeLineOfAnyPointsStroke;
	calcHitPointAbs<RESULT>(
		x: number,
		y: number,
		threshold: number,
		range: EShapeLineOfAnyPointsTestRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT>,
		result: RESULT
	): boolean;
}
