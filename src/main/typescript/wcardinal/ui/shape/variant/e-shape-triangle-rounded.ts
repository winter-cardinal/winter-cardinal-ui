/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeTriangleRoundedTriangulated } from "./e-shape-triangle-rounded-triangulated";
import { EShapeTriangleRoundedTriangulatedImpl } from "./e-shape-triangle-rounded-triangulated-impl";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestTriangleRounded } from "./hit-test-triangle-rounded";

export class EShapeTriangleRounded extends EShapePrimitive {
	protected readonly _triangulated: EShapeTriangleRoundedTriangulated;

	constructor(type: EShapeType = EShapeType.TRIANGLE_ROUNDED) {
		super(type);
		this._triangulated = this.newTriangulated();
	}

	protected newTriangulated(): EShapeTriangleRoundedTriangulated {
		return new EShapeTriangleRoundedTriangulatedImpl(this);
	}

	get triangulated(): EShapeTriangleRoundedTriangulated {
		return this._triangulated;
	}

	clone(): EShapeTriangleRounded {
		return new EShapeTriangleRounded(this.type).copy(this);
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
