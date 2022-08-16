/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestSemicircle } from "./hit-test-semicircle";

export class EShapeSemicircle extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.SEMICIRCLE) {
		super(type);
	}

	clone(): EShapeSemicircle {
		return new EShapeSemicircle(this.type).copy(this);
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
