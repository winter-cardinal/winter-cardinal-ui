/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { EShapeTriangleTriangulated } from "./e-shape-triangle-triangulated";
import { EShapeTriangleTriangulatedImpl } from "./e-shape-triangle-triangulated-impl";
import { hitTestTriangle } from "./hit-test-triangle";

export class EShapeTriangle extends EShapePrimitive {
	protected readonly _triangulated: EShapeTriangleTriangulated;

	constructor(type: EShapeType = EShapeType.TRIANGLE) {
		super(type);
		this._triangulated = this.newTriangulated();
	}

	protected newTriangulated(): EShapeTriangleTriangulated {
		return new EShapeTriangleTriangulatedImpl(this);
	}

	get triangulated(): EShapeTriangleTriangulated {
		return this._triangulated;
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
