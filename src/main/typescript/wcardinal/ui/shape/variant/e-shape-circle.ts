/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeCircleTriangulated } from "./e-shape-circle-triangulated";
import { EShapeCircleTriangulatedImpl } from "./e-shape-circle-triangulated-impl";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestCircle } from "./hit-test-circle";

export class EShapeCircle extends EShapePrimitive {
	protected readonly _triangulated: EShapeCircleTriangulated;

	constructor(type: EShapeType = EShapeType.CIRCLE) {
		super(type);
		this._triangulated = this.newTriangulated();
	}

	protected newTriangulated(): EShapeCircleTriangulated {
		return new EShapeCircleTriangulatedImpl(this);
	}

	get triangulated(): EShapeCircleTriangulated {
		return this._triangulated;
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
