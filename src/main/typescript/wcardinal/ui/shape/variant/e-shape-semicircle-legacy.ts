/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestSemicircle } from "./hit-test-semicircle";

/**
 * A semicircle shape.
 */
export class EShapeSemicircleLegacy extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.SEMICIRCLE_LEGACY) {
		super(type);
		this.stroke.side = EShapeStrokeSide.ALL & ~EShapeStrokeSide.BOTTOM;
	}

	clone(): EShapeSemicircleLegacy {
		return new EShapeSemicircleLegacy(this.type).copy(this);
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
		if (super.containsAbsBBox(x, y, ax, ay)) {
			return hitTestSemicircle(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
