/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeCopyPart } from "../e-shape-copy-part";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapeFanTriangulated } from "./e-shape-fan-triangulated";
import { EShapeFanTriangulatedImpl } from "./e-shape-fan-triangulated-impl";
import { EShapeLockPart } from "./e-shape-lock-part";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestFan } from "./hit-test-fan";

export class EShapeFan extends EShapePrimitive {
	protected _angle: number;
	protected readonly _triangulated: EShapeFanTriangulated;

	constructor(type: EShapeType = EShapeType.FAN) {
		super(type);
		this._angle = this.newAngle();
		this._triangulated = this.newTriangulated();
	}

	protected newAngle(): number {
		return EShapeDefaults.ANGLE;
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
	 */
	get angle(): number {
		return this._angle;
	}

	set angle(angle: number) {
		if (this._angle !== angle) {
			this._angle = angle;
			this.updateUploaded();
		}
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

	override copy(source: EShape, part?: EShapeCopyPart): this {
		this.lock(EShapeLockPart.ALL);
		super.copy(source, part);
		if ((part == null || part & EShapeCopyPart.STYLE) && source instanceof EShapeFan) {
			this._angle = source._angle;
		}
		this.unlock(EShapeLockPart.ALL, true);
		return this;
	}

	override clone(): EShapeFan {
		return new EShapeFan(this.type).copy(this);
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
			return hitTestFan(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}

	override serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = this._angle;
		return result;
	}
}
