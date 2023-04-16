/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeLayout } from "../e-shape-layout";
import { EShapeTransforms } from "../e-shape-transforms";

export class EShapeGroupSizeLayout implements EShapeLayout {
	protected static WORK_TRANSFORM: Matrix = new Matrix();

	protected shape: EShape;
	protected base: Point;
	protected shapeBase: Point;
	protected transform: Matrix;

	protected capable: boolean;

	constructor(shape: EShape, bx: number, by: number) {
		this.shape = shape;

		// Base group size
		this.base = new Point(bx, by);

		// Base shape size
		const size = shape.size;
		this.shapeBase = new Point(size.x, size.y);

		// Transform
		this.transform = new Matrix();
		shape.updateTransform();
		shape.transform.localTransform.copyTo(this.transform);

		this.capable =
			EShapeCapabilities.contains(shape, EShapeCapability.POSITION) &&
			EShapeCapabilities.contains(shape, EShapeCapability.WIDTH) &&
			EShapeCapabilities.contains(shape, EShapeCapability.HEIGHT) &&
			EShapeCapabilities.contains(shape, EShapeCapability.ROTATION) &&
			EShapeCapabilities.contains(shape, EShapeCapability.SKEW);
	}

	isCompatible(shape: EShape): boolean {
		return this.shape === shape;
	}

	reset(shape: EShape, baseX: number, baseY: number): void {
		this.base.set(baseX, baseY);

		// Base shape size
		const size = shape.size;
		this.shapeBase.copyFrom(size);

		// Transform
		shape.updateTransform();
		shape.transform.localTransform.copyTo(this.transform);
	}

	update(shape: EShape, baseX: number, baseY: number, pivotX: number, pivotY: number): void {
		if (!this.capable) {
			return;
		}
		const sx = baseX / this.base.x;
		const sy = baseY / this.base.y;
		const childBase = this.shapeBase;
		const transform = EShapeGroupSizeLayout.WORK_TRANSFORM;
		transform
			.identity()
			.append(this.transform)
			.translate(-pivotX, -pivotY)
			.scale(sx, sy)
			.translate(+pivotX, +pivotY);
		shape.disallowOnTransformChange();
		EShapeTransforms.applyLocal(shape, transform, EShapeCapability.ALL, childBase);
		shape.allowOnTransformChange(false);
	}
}
