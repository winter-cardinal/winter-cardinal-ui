/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeLayout } from "../e-shape-layout";
import { EShapeLockPart } from "./e-shape-lock-part";
import { toSizeNormalized } from "./to-size-normalized";

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
		shape.lock(EShapeLockPart.TRANSFORM_AND_UPLOADED);
		this.apply(shape, transform, EShapeCapability.ALL, childBase);
		shape.unlock(EShapeLockPart.TRANSFORM_CHILD, false);
		shape.unlock(
			EShapeLockPart.TRANSFORM_THIS |
				EShapeLockPart.TRANSFORM_PARENT |
				EShapeLockPart.UPLOADED,
			true
		);
	}

	protected apply(
		shape: EShape,
		localTransform: Matrix,
		capability: EShapeCapability,
		size?: IPoint
	): void {
		// Reconstruct the position, the rotation and the size
		const a = localTransform.a;
		const b = localTransform.b;
		const c = localTransform.c;
		const d = localTransform.d;
		const tx = localTransform.tx;
		const ty = localTransform.ty;

		// Transform
		const transform = shape.transform;

		// Capability
		const cposition = !!(capability & EShapeCapability.POSITION);
		const crotation = !!(capability & EShapeCapability.ROTATION);
		const cskew = !!(capability & EShapeCapability.SKEW);
		const cwidth = !!(capability & EShapeCapability.WIDTH);
		const cheight = !!(capability & EShapeCapability.HEIGHT);

		// Rotation and skew
		if (crotation || cskew) {
			// Rotation
			const rx = Math.atan2(-c, d); // rotation - skewX
			const ry = Math.atan2(+b, a); // rotation + skewY
			if (crotation) {
				transform.rotation = (rx + ry) * 0.5; // Here, assumes `skewX` === `skewY`
			}

			// Skew
			if (cskew) {
				const skew = (ry - rx) * 0.5;
				transform.skew.set(skew, skew);
			}
		}

		// Position
		if (cposition) {
			// Assumes the pivot is invariant.
			// tx = position.x - (a * px + c * py)
			// ty = position.y - (b * px + d * py)
			//
			// Thus,
			// position.x = tx + (a * px + c * py)
			// position.y = ty + (b * px + d * py)
			const pivot = transform.pivot;
			const px = pivot.x;
			const py = pivot.y;
			transform.position.set(tx + (a * px + c * py), ty + (b * px + d * py));
		}

		// Scale
		if (size != null && (cwidth || cheight)) {
			const w = toSizeNormalized(size.x * Math.sqrt(a * a + b * b));
			const h = toSizeNormalized(size.y * Math.sqrt(c * c + d * d));
			const s = shape.size;
			if (cwidth && cheight) {
				s.set(w, h);
			} else if (cwidth) {
				s.x = w;
			} else {
				s.y = h;
			}
		}
	}
}
