/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestTriangleRounded } from "./hit-test-triangle-rounded";

export class EShapeTriangleRounded extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.TRIANGLE_ROUNDED) {
		super(type);
	}

	clone(): EShapeTriangleRounded {
		return new EShapeTriangleRounded().copy(this);
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
			return hitTestTriangleRounded(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
