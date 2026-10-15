/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestTriangleRoundedLegacy } from "./hit-test-triangle-rounded";

export class EShapeTriangleRoundedLegacy extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.TRIANGLE_ROUNDED_LEGACY) {
		super(type);
	}

	clone(): EShapeTriangleRoundedLegacy {
		return new EShapeTriangleRoundedLegacy(this.type).copy(this);
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
			return hitTestTriangleRoundedLegacy(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
