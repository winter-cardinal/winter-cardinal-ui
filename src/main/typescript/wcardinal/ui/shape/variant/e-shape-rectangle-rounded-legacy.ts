/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestRectangleRounded } from "./hit-test-rectangle-rounded";

export class EShapeRectangleRoundedLegacy extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.RECTANGLE_ROUNDED_LEGACY) {
		super(type);
	}

	clone(): EShapeRectangleRoundedLegacy {
		return new EShapeRectangleRoundedLegacy(this.type).copy(this);
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
			return hitTestRectangleRounded(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
