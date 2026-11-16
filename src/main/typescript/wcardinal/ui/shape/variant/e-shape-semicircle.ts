/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapeSectorTriangulated } from "./e-shape-sector-triangulated";
import { EShapeSectorTriangulatedImpl } from "./e-shape-sector-triangulated-impl";
import { EShapePrimitive } from "./e-shape-primitive";
import { EShapeStrokeImpl } from "./e-shape-stroke-impl";
import { hitTestSector } from "./hit-test-sector";

/**
 * A semicircle shape.
 */
export class EShapeSemicircle extends EShapePrimitive {
	protected readonly _triangulated: EShapeSectorTriangulated;

	constructor(type: EShapeType = EShapeType.SEMICIRCLE) {
		super(type);
		this._triangulated = this.newTriangulated();
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

	protected newTriangulated(): EShapeSectorTriangulated {
		return new EShapeSectorTriangulatedImpl(this);
	}

	get triangulated(): EShapeSectorTriangulated {
		return this._triangulated;
	}

	override get angle(): number {
		return 0.5;
	}

	override set angle(angle: number) {
		// DO NOTHING
	}

	protected override toHitTestStrokeShift(
		strokeWidth: number,
		strokeScale: number,
		strokeAlign: number
	): number {
		if (this.stroke.side !== EShapeStrokeSide.NONE) {
			return super.toHitTestStrokeShift(strokeWidth, strokeScale, strokeAlign);
		}
		return 0;
	}

	override clone(): EShapeSemicircle {
		return new EShapeSemicircle(this.type).copy(this);
	}

	override containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		if (super.containsAbsBBox(x, y, ax, ay)) {
			return hitTestSector(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
