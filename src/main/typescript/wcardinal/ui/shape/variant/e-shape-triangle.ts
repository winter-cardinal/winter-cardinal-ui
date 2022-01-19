/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestTriangle } from "./hit-test-triangle";

export class EShapeTriangle extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.TRIANGLE) {
		super(type);
	}

	clone(): EShapeTriangle {
		return new EShapeTriangle(this.type).copy(this);
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
			return hitTestTriangle(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
