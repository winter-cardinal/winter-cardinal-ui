/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
import { EShapeStrokeImpl } from "./e-shape-stroke-impl";
import { hitTestSemicircle } from "./hit-test-semicircle";

/**
 * A legacy semicircle shape.
 */
export class EShapeSemicircleLegacy extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.SEMICIRCLE_LEGACY) {
		super(type);
	}

	protected override newStroke(): EShapeStroke {
		return new EShapeStrokeImpl(
			this,
			true,
			EShapeDefaults.STROKE_COLOR,
			EShapeDefaults.STROKE_ALPHA,
			EShapeDefaults.STROKE_WIDTH,
			EShapeDefaults.STROKE_ALIGN,
			EShapeDefaults.STROKE_SIDE & ~EShapeStrokeSide.BOTTOM,
			EShapeDefaults.STROKE_STYLE
		);
	}

	clone(): EShapeSemicircleLegacy {
		return new EShapeSemicircleLegacy(this.type).copy(this);
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
			return hitTestSemicircle(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
