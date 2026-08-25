/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestRectangle } from "./hit-test-rectangle";

export class EShapeRectangleLegacy extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.RECTANGLE_LEGACY) {
		super(type);
	}

	clone(): EShapeRectangleLegacy {
		return new EShapeRectangleLegacy(this.type).copy(this);
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
			return hitTestRectangle(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
