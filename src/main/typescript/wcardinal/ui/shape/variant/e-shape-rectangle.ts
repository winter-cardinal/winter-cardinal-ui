/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { EShapeRectangleTriangulated } from "./e-shape-rectangle-triangulated";
import { EShapeRectangleTriangulatedImpl } from "./e-shape-rectangle-triangulated-impl";
import { hitTestRectangle } from "./hit-test-rectangle";

export class EShapeRectangle extends EShapePrimitive {
	protected readonly _triangulated: EShapeRectangleTriangulated;

	constructor(type: EShapeType = EShapeType.RECTANGLE) {
		super(type);
		this._triangulated = this.newTriangulated();
	}

	protected newTriangulated(): EShapeRectangleTriangulated {
		return new EShapeRectangleTriangulatedImpl(this);
	}

	get triangulated(): EShapeRectangleTriangulated {
		return this._triangulated;
	}

	clone(): EShapeRectangle {
		return new EShapeRectangle(this.type).copy(this);
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
