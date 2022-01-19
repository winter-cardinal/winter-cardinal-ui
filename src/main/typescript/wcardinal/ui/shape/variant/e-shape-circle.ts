/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestCircle } from "./hit-test-circle";

export class EShapeCircle extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.CIRCLE) {
		super(type);
	}

	clone(): EShapeCircle {
		return new EShapeCircle(this.type).copy(this);
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
			return hitTestCircle(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
