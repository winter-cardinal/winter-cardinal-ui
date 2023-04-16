/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeEditor } from "./e-shape-editor";
import { EShapeBase } from "./variant/e-shape-base";
import { toSizeNormalized } from "./variant/to-size-normalized";
import { EShapeCapability } from "./e-shape-capability";

export class EShapeTransforms {
	static prepare(shape: EShape): void {
		const editor = shape.editor || new EShapeEditor();
		shape.editor = editor;

		// Transform
		shape.updateTransform();
		const parent = shape.parent;
		if (parent instanceof EShapeBase) {
			parent.transform.internalTransform
				.copyTo(editor.internalTransformParentInverse)
				.invert();
		} else {
			editor.internalTransformParentInverse.identity();
		}
		shape.transform.internalTransform.copyTo(editor.internalTransform);

		// Rotation
		editor.rotation = shape.transform.rotation;

		// Size
		editor.size.copyFrom(shape.size);

		//
		shape.disallowOnTransformChange();
	}

	static finalize(shape: EShape): void {
		shape.allowOnTransformChange(true);
	}

	static apply(shape: EShape, transform: Matrix, capability: EShapeCapability): void {
		const editor = shape.editor;
		if (editor != null) {
			const newLocalTransform = editor.localTransform;
			editor.internalTransformParentInverse
				.copyTo(newLocalTransform)
				.append(transform)
				.append(editor.internalTransform);
			this.applyLocal(shape, newLocalTransform, capability, editor.size);
		}
	}

	static applyLocal(
		shape: EShape,
		localTransform: Matrix,
		capability: EShapeCapability,
		size: Point
	): void {
		shape.disallowUploadedUpdate();

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
		if (cwidth || cheight) {
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

		//
		shape.allowUploadedUpdate();
	}
}
