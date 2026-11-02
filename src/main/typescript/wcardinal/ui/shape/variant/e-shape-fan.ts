/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeFanTriangulated } from "./e-shape-fan-triangulated";
import { EShapeFanTriangulatedImpl } from "./e-shape-fan-triangulated-impl";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestFan } from "./hit-test-fan";
import { EShapeFanStrokeMode, toFanStrokeMode } from "./to-fan";

/**
 * A fan shape.
 * The arc of the fan is on the ellipse inscribed in the shape size, and the apex of the fan is the center of the ellipse.
 *
 * @beta
 */
export class EShapeFan extends EShapePrimitive {
	static readonly DEFAULT_ANGLE = 0.333;

	protected readonly _triangulated: EShapeFanTriangulated;

	constructor(type: EShapeType = EShapeType.FAN) {
		super(type);
		this._radius = EShapeFan.DEFAULT_ANGLE;
		this._triangulated = this.newTriangulated();
	}

	protected newTriangulated(): EShapeFanTriangulated {
		return new EShapeFanTriangulatedImpl(this);
	}

	get triangulated(): EShapeFanTriangulated {
		return this._triangulated;
	}

	/**
	 * The ratio of the half central angle of the fan to PI. Must be in [0, 0.5].
	 * 0.5 results in a semicircle.
	 * This is stored in the radius so that it is serialized in the same slot as the radius.
	 */
	get angle(): number {
		return this._radius;
	}

	set angle(angle: number) {
		this.radius = angle;
	}

	protected override toHitTestStrokeShift(
		strokeWidth: number,
		strokeScale: number,
		strokeAlign: number
	): number {
		if (toFanStrokeMode(this.stroke.side) === EShapeFanStrokeMode.NONE) {
			return 0;
		}
		return super.toHitTestStrokeShift(strokeWidth, strokeScale, strokeAlign);
	}

	clone(): EShapeFan {
		return new EShapeFan(this.type).copy(this);
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
			return hitTestFan(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
