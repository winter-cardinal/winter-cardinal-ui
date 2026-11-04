/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapeFan } from "./e-shape-fan";
import { EShapeStrokeImpl } from "./e-shape-stroke-impl";

/**
 * A semicircle shape.
 */
export class EShapeSemicircle extends EShapeFan {
	constructor(type: EShapeType = EShapeType.SEMICIRCLE) {
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

	protected newAngle(): number {
		return 0.5;
	}

	override clone(): EShapeSemicircle {
		return new EShapeSemicircle(this.type).copy(this);
	}
}
