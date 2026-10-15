/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeRectangleRoundedTriangulated } from "./e-shape-rectangle-rounded-triangulated";
import { EShapeRectangleRoundedTriangulatedImpl } from "./e-shape-rectangle-rounded-triangulated-impl";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestRectangleRounded } from "./hit-test-rectangle-rounded";

export class EShapeRectangleRounded extends EShapePrimitive {
	protected readonly _triangulated: EShapeRectangleRoundedTriangulated;

	constructor(type: EShapeType = EShapeType.RECTANGLE_ROUNDED) {
		super(type);
		this._triangulated = this.newTriangulated();
	}

	protected newTriangulated(): EShapeRectangleRoundedTriangulated {
		return new EShapeRectangleRoundedTriangulatedImpl(this);
	}

	get triangulated(): EShapeRectangleRoundedTriangulated {
		return this._triangulated;
	}

	clone(): EShapeRectangleRounded {
		return new EShapeRectangleRounded(this.type).copy(this);
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
