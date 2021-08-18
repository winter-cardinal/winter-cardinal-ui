/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestRectangle } from "./hit-test-rectangle";

export class EShapeRectangle extends EShapePrimitive {
	constructor(type = EShapeType.RECTANGLE) {
		super(type);
	}

	clone(): EShapeRectangle {
		return new EShapeRectangle().copy(this);
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
